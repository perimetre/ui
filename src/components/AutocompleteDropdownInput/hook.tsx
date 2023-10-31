import classnames from 'classnames';
import { useCombobox, useMultipleSelection } from 'downshift';
import { useCallback, useEffect, useMemo, useState } from 'react';

export type AutocompleteItemType = {
  id: string | number;
  label: string;
};

export type AutocompleteSettings<T extends AutocompleteItemType = AutocompleteItemType> = {
  /**
   * The autocomplete input id
   */
  id: string;
  /**
   * The options that should be displayed in the dropdown
   */
  options?: T[];
  /**
   * The list of selected items to initialize the selected array
   */
  initialSelectedItems?: T[];
  /**
   * Whether or not the user is allowed to only select a single item or multiple items
   * @default false
   */
  isSingleSelect?: boolean;
  /**
   * Whether or not should always show the result list regardless if the user is searching or not.
   * @default false
   */
  displayRegardlessIfSearching?: boolean;
  /**
   * Whether or not should always show the result list regardless if the input is focused or not
   * (Only relevant when using TAB to focus the input)
   * @default true
   */
  displayRegardlessIfFocused?: boolean;
  /**
   * A callback that is called every time the user selects or unselects an item
   */
  onItemToggle?: (item: T, selected: boolean) => void;
  /**
   * Modifies the items being displayed, for example, to filter or sort them. It takes items as argument and expects them back in return.
   */
  transformItems?: (items: T[]) => T[];
  /**
   *  The input defaultValue property
   */
  defaultValue?: string;
  /**
   *  The input value property
   */
  value?: string;
  /**
   * Whether or not the options should be filtered based on user's input
   */
  ignoreFilter?: boolean;
  /**
   * The input onChange callback
   */
  onChange?: (value?: string) => void;
  /**
   * Keep selected items in dropdown list regardless.
   */
  displaySelected?: boolean;
};

/**
 * The logic wrapper for the autocomplete
 * @param settings The hook parameters
 * @param settings.id The autocomplete input id
 * @param settings.options The options that should be displayed in the dropdown
 * @param settings.initialSelectedItems The list of selected items to initialize the selected array
 * @param settings.isSingleSelect Whether or not the user is allowed to only select a single item or multiple items
 * @param settings.displayRegardlessIfSearching Whether or not should always show the result list regardless if the user is searching or not.
 * @param settings.displayRegardlessIfFocused Whether or not should always show the result list regardless if the input is focused or not
 * @param settings.onItemToggle A callback that is called every time the user selects or unselects an item
 * @param settings.transformItems Modifies the items being displayed, for example, to filter or sort them. It takes items as argument and expects them back in return.
 * @param settings.defaultValue The input defaultValue property
 * @param settings.value The input value property
 * @param settings.ignoreFilter Whether or not the options should be filtered based on user's input
 * @param settings.onChange The input onChange callback
 * @param settings.displaySelected Keep selected items in dropdown list regardless.
 */
export const useAutocompleteInput = <T extends AutocompleteItemType = AutocompleteItemType>({
  id,
  options = [],
  initialSelectedItems: selected,
  isSingleSelect,
  displayRegardlessIfSearching,
  displayRegardlessIfFocused,
  onItemToggle,
  transformItems,
  defaultValue = '',
  value,
  ignoreFilter,
  onChange,
  displaySelected
}: AutocompleteSettings<T>) => {
  const [inputValue, setInputValue] = useState<string>(`${defaultValue || ''}`);

  // Call the onChange if inputValue changes
  useEffect(() => {
    if (onChange) onChange(inputValue);
  }, [inputValue, onChange]);

  // Update the input value if the provided value changes
  useEffect(() => {
    if (value) setInputValue(value);
  }, [value]);

  // We disabled the memo exhaustive deps because we don't want this to be updated
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialSelectedItems = useMemo(() => selected || [], []);

  // Makes a function that will be used to compare if two items are equal
  const compareFunction = useCallback(
    (resultItem: T, selectedItem?: T | null) => resultItem.id === selectedItem?.id,
    []
  );

  // Get the multiple selection helpers from downshift
  // Ref: https://github.com/downshift-js/downshift/tree/master/src/hooks/useMultipleSelection
  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
    setSelectedItems
  } = useMultipleSelection<T>({
    initialSelectedItems,
    /**
     * Returns a string representation for an item
     * @param item The item object
     */
    itemToString: (item) => `${item.id}`,
    /**
     * Overrides the default reducer for the multiple selection
     * @param _state The current reducer state
     * @param action The current reducer dispatched action
     * @param action.type The current reducer dispatched action type
     * @param action.changes The current reducer changes up until now
     * @param action.selectedItem The current selected item
     * @param action.activeIndex The current active index
     */
    stateReducer: (_state, { type, changes, selectedItem, activeIndex }) => {
      switch (type) {
        // Overrides the remove event. Because the original event uses a simple comparation.
        // And that doesn't work, because we're working with objects and not strings. So we use our own compare function
        case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
          const selectedItemsList: T[] = selectedItems || [];

          // Find if the object is selected or not with our own compare function
          // Check if the item we just selected is already selected or not
          const selectedItemIndex = selectedItemsList.findIndex((x) => compareFunction(x, selectedItem));

          // Same code as original reducer from here on
          // Ref: https://github.com/downshift-js/downshift/blob/7972eb064352023fa9fafb69f85cdfa6477dd1a3/src/hooks/useMultipleSelection/reducer.js#L70
          let newActiveIndex = activeIndex;

          if (selectedItemsList.length === 1) {
            newActiveIndex = -1;
          } else if (selectedItemIndex === selectedItemsList.length - 1) {
            newActiveIndex = selectedItemsList.length - 2;
          }

          return {
            ...changes,
            selectedItems: [
              ...selectedItemsList.slice(0, selectedItemIndex),
              ...selectedItemsList.slice(selectedItemIndex + 1)
            ],
            ...{ activeIndex: newActiveIndex }
          };
        default:
          return changes; // otherwise business as usual.
      }
    }
  });

  /**
   * A method used to filter the items based on the user's input
   * @param items The current list of items
   */
  const getFilteredItems = (items: T[]) => {
    // If we don't want to ignore the filter
    if (!ignoreFilter) {
      // Then filter

      // If we shouldn't display the selected items in the dropdown result list
      if (!displaySelected) {
        // Return a filter function that also filters the selected items
        return items.filter(
          (item) =>
            selectedItems.indexOf(item) < 0 && item.label.toLowerCase().includes((inputValue || '').toLowerCase())
        );
      } else {
        // Return a filter function that does not filter the selected items, thus, keeping them
        return items.filter((item) => item.label.toLowerCase().includes((inputValue || '').toLowerCase()));
      }
    } else {
      // Don't filter
      return items;
    }
  };

  // Get filtered items, but before, transform them
  const filteredOptions = getFilteredItems(transformItems ? transformItems(options) : options);

  useEffect(() => {
    if (selected) {
      // Update the state of the selected list state
      setSelectedItems(selected);
    }
  }, [selected, setSelectedItems]); // If the selected list outside of the component changes

  const toggleSelectedItem = useCallback(
    (itemToToggle: T) => {
      // Check if the item exists
      const index = selectedItems.findIndex((x) => compareFunction(x, itemToToggle));

      if (index === -1) {
        // If the item exists
        if (onItemToggle) {
          // Call the callback
          onItemToggle(itemToToggle, true);
        }

        // If we should select only one. Remove the current if any.
        if (isSingleSelect && selectedItems && selectedItems.length > 0) {
          removeSelectedItem(selectedItems[0]);
        }

        // Add to the selected list
        addSelectedItem(itemToToggle);
      } else {
        // If the item doesn't exist
        if (onItemToggle) {
          // Call the callbaxk
          onItemToggle(itemToToggle, false);
        }

        // Remove from the list
        removeSelectedItem(itemToToggle);
      }
    },
    [addSelectedItem, isSingleSelect, onItemToggle, removeSelectedItem, selectedItems, compareFunction]
  );

  // Get the combobox selection helpers from downshift
  const {
    isOpen,
    // getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectItem,
    openMenu
  } = useCombobox<T>({
    /**
     * Returns a string representation for an item
     * @param item The item object
     */
    itemToString: (item) => `${item?.id}`,
    // If we should display regardless, we always give true, else, give undefined so the hook will control the state of isOpen
    isOpen: displayRegardlessIfSearching !== undefined && displayRegardlessIfSearching === true ? true : undefined,
    // The value of the input is the current refinement of the search
    inputValue,
    // The items list are the options provided by algolia
    items: filteredOptions,
    /**
     * The callback for when something is selected
     * @param changes The downshift combobox changes state
     * @param changes.inputValue The current value of the html input
     * @param changes.type The current change event type
     * @param changes.selectedItem The item that was just selected, if any
     */
    onStateChange: ({ inputValue, type, selectedItem }) => {
      // If any kind of state within the input has changed
      switch (type) {
        // If the user is typing = InputChange
        case useCombobox.stateChangeTypes.InputChange:
          // Update the state
          setInputValue(inputValue || '');
          break;
        // If the user has selected an item
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          // If there's any selection
          if (selectedItem) {
            // Actually select the item, adding it to the array
            toggleSelectedItem(selectedItem);

            // Clear the input text
            setInputValue('');

            // Clear the pending selected item
            selectItem(null as unknown as T);
          }
          break;
        default:
          break;
      }
    }
    // /**
    //  * The callback for when the input is updated
    //  *
    //  * @param changes The downshift combobox changes state
    //  * @param changes.inputValue The current value of the html input
    //  */
    // onInputValueChange: ({ inputValue }) => {
    //   if (onChange) onChange(inputValue?.trim() === 'undefined' ? '' : inputValue || '');
    // }
  });

  const getRootProps = useCallback(
    (opts?: { className?: string; style?: React.CSSProperties }) => ({
      className: classnames('autocomplete-root', opts?.className),
      style: opts?.style
    }),
    []
  );

  const getInputContainerProps = useCallback(
    (opts?: { className?: string; style?: React.CSSProperties }) => ({
      className: classnames('autocomplete-input-container', opts?.className),
      style: opts?.style
    }),
    []
  );

  const getSelectedListProps = useCallback(
    (opts?: { className?: string; style?: React.CSSProperties }) => ({
      className: classnames('autocomplete-selected-list', opts?.className),
      style: opts?.style
    }),
    []
  );

  return {
    isOpen,
    filteredOptions,
    selectedItems,
    getRootProps,
    /**
     * Get the required props for the label
     * @param opts The method options
     * @param opts.className The classname that should be appended
     * @param opts.style The style property to be forwarded
     */
    getLabelProps: (opts?: { className?: string; style?: React.CSSProperties }) =>
      getLabelProps({ ...opts, id: `label-${id}`, htmlFor: id }),
    /**
     * Get the required props for the combobox container
     * @param opts The method options
     * @param opts.className The classname that should be appended
     * @param opts.style The style property to be forwarded
     */
    getComboboxProps: (opts?: { className?: string; style?: React.CSSProperties }) =>
      getComboboxProps({
        ...opts,
        className: classnames('autocomplete-combo', { open: isOpen }, opts?.className)
      }),
    getInputContainerProps,
    /**
     * Get the required props for the input
     * @param opts The method options
     * @param opts.className The classname that should be appended
     * @param opts.style The style property to be forwarded
     */
    getInputProps: (opts?: { className?: string; style?: React.CSSProperties }) =>
      getInputProps(
        getDropdownProps({
          ...opts,
          id,
          className: classnames(
            'autocomplete-input',
            {
              open: isOpen
            },
            opts?.className
          ),
          /**
           * The handler for when a key is pressed in the input
           * @param event the input event of the button press
           */
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onKeyDown: (event: any) => {
            // If the user pressed these buttons, let's override the default downshift behavior
            if (event.key === 'Home' || event.key === 'End' || event.key === 'Backspace') {
              // Prevent the downshift event and use the default input event
              // We do this or else "home" and "end" would be used to navigate the results instead of the input
              event.nativeEvent.preventDownshiftDefault = true;
            }
          },
          /**
           * The handler for when the input gets focused
           */
          onFocus: () => {
            // If the menu is still not open, and we should not always display it
            if (!isOpen && !displayRegardlessIfFocused) {
              // Display the dropdown when focusing the input,
              // Which shows the first results
              openMenu();
            }
          },
          /**
           * The handler for when the user clicks in the input
           */
          onClick: () => {
            if (!isOpen) {
              openMenu();
            }
          }
        })
      ),
    /**
     * Get the required props for the result list container
     * @param opts The method options
     * @param opts.className The classname that should be appended
     * @param opts.style The style property to be forwarded
     */
    getMenuProps: (opts?: { className?: string; style?: React.CSSProperties }) =>
      getMenuProps({
        ...opts,
        className: classnames(
          'autocomplete-result-list',
          {
            open: isOpen
          },
          opts?.className
        ),
        style: {
          ...opts?.style,
          // Don't show when closed
          display: isOpen ? 'block' : 'none'
        }
      }),
    /**
     * Get the required props for an item
     * @param opts The method options
     * @param opts.item the current item
     * @param opts.index the item's index
     * @param opts.className the classname that should be appended
     * @param opts.style The style property to be forwarded
     */
    getItemProps: ({
      item,
      index,
      className,
      style
    }: {
      item: T;
      index: number;
      className?: string;
      style?: React.CSSProperties;
    }) => {
      // Get if this item is selected or not to use for ui
      const isSelected = selectedItems.findIndex((x) => x.id === item.id) > -1;
      return {
        ...getItemProps({
          item,
          index,
          className: classnames(
            'autocomplete-result-item',
            {
              selected: isSelected,
              highlighted: highlightedIndex === index
            },
            className
          ),
          style
        }),
        isSelected
      };
    },
    getSelectedListProps,
    /**
     * Get the required props for a selected item
     * @param opts The method options
     * @param opts.selectedItem the current selected item
     * @param opts.index the item's index
     * @param opts.className the classname that should be appended
     * @param opts.style The style property to be forwarded
     */
    getSelectedItemProps: ({
      selectedItem,
      index,
      className,
      style
    }: {
      selectedItem: T;
      index: number;
      className?: string;
      style?: React.CSSProperties;
    }) =>
      getSelectedItemProps({
        className: classnames('autocomplete-selected-item', className),
        selectedItem,
        index,
        style
      }),
    toggleSelectedItem
  };
};
