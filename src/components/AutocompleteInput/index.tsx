import React, { useEffect, useMemo, useCallback, useState } from 'react';
import { useCombobox, useMultipleSelection } from 'downshift';
import { AttentionIcon, CrossIcon } from '../Icons';

type ItemType = {
  id: string | number;
  label: string;
};

type AutocompleteInputProps<T extends ItemType> = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
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
   *
   * @default false
   */
  isSingleSelect?: boolean;
  /**
   * Whether or not should always show the result list regardless if the user is searching or not.
   *
   * @default false
   */
  displayRegardlessIfSearching?: boolean;
  /**
   * Whether or not should always show the result list regardless if the input is focused or not
   *
   * @default true
   */
  displayRegardlessIfFocused?: boolean;
  /**
   * A callback that is called every time the user selects or unselects an item
   */
  onItemToggle?: (item: T, selected: boolean) => void;
  /**
   * The text that should be placed in the input's label
   */
  label?: string;
  /**
   * A translation object to override existing translations
   */
  translations?: {
    explanation?: string;
    blankState?: string;
  };
  /**
   * The render function used to render the option buttons
   */
  renderButtons?: (item: T, isSelected: boolean) => React.ReactNode;
};

/**
 * An autocomplete input
 *
 * @param props the react component props
 * @param props.options The options that should be displayed in the dropdown
 * @param props.initialSelectedItems The list of selected items to initialize the selected array
 * @param props.isSingleSelect Whether or not the user is allowed to only select a single item or multiple items
 * @param props.displayRegardlessIfSearching Whether or not should always show the result list regardless if the user is searching or not.
 * @param props.displayRegardlessIfFocused Whether or not should always show the result list regardless if the input is focused or not
 * @param props.onItemToggle A callback that is called every time the user selects or unselects an item
 * @param props.value The input value property
 * @param props.defaultValue The input defaultValue property
 * @param props.label The text that should be placed in the input's label
 * @param props.translations A translation object to override existing translations
 * @param props.renderButtons The render function used to render the option buttons
 */
export const AutocompleteInput = <T extends ItemType>({
  options = [],
  initialSelectedItems: selected,
  isSingleSelect,
  displayRegardlessIfSearching,
  displayRegardlessIfFocused,
  onItemToggle,
  defaultValue = '',
  label,
  translations,
  renderButtons,
  ...inputProps
}: AutocompleteInputProps<T>) => {
  const [inputValue, setInputValue] = useState<string>(`${defaultValue || ''}`);

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
     *
     * @param item The item object
     */
    itemToString: (item) => `${item.id}`,
    /**
     * Overrides the default reducer for the multiple selection
     *
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
   *
   * @param items The current list of items
   */
  const getFilteredItems = useCallback(
    (items: T[]) =>
      items.filter(
        (item) => selectedItems.indexOf(item) < 0 && item.label.toLowerCase().includes((inputValue || '').toLowerCase())
      ),
    [inputValue, selectedItems]
  );

  const filteredOptions = useMemo(() => getFilteredItems(options), [getFilteredItems, options]);

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
     *
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
     *
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
            selectItem((null as unknown) as T);
          }
          break;
        default:
          break;
      }
    }
    /**
     * The callback for when the input is updated
     *
     * @param changes The downshift combobox changes state
     * @param changes.inputValue The current value of the html input
     */
    // onInputValueChange: ({ inputValue }) => {
    //
    //   setInputValue(inputValue || '');
    // }
  });

  return (
    <div className="autocomplete-root">
      {label && (
        <label className="pui-label-input" {...getLabelProps({ id: inputProps.id })}>
          {label}
        </label>
      )}
      {/* Render the combo container for the input and the results */}
      <div
        className={`autocomplete-combo pui-dropdown-input-container ${isOpen ? 'open' : ''}`}
        // The parent must be relative so the child(result list) position absolute works
        {...getComboboxProps()}
      >
        <input
          className="autocomplete-input pui-text-input"
          {...inputProps}
          {...getInputProps(
            getDropdownProps({
              id: inputProps.id,
              /**
               * The handler for when a key is pressed in the input
               *
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
          )}
        />
        {/* The container for the results must be in the DOM at all times for accessibility reasons */}
        <ul
          className="pui-dropdown-input-options"
          {...getMenuProps({
            style: {
              // Don't show when closed
              display: isOpen ? 'block' : 'none'
            }
          })}
        >
          {/* Only render this if open */}
          {isOpen && (
            <>
              <li className="italic py-2 px-4 text-sm text-pui-paragraph-300">
                {translations?.explanation || 'Press enter to select, ↑↓ to navigate, esc to dismiss'}
              </li>
              {
                // If there is more than one result
                filteredOptions && filteredOptions.length > 0 ? (
                  // Display the results
                  filteredOptions.map((item, index) => {
                    // Get if this item is selected or not to use for ui
                    const isSelected = selectedItems.findIndex((x) => x.id === item.id) > -1;

                    // Get the complete classes
                    const className = `autocomplete-result-item pui-dropdown-input-item flex items-center justify-between ${
                      isSelected ? 'selected' : ''
                    } ${highlightedIndex === index ? 'highlighted' : ''}`;

                    // Get the required props passed by downshift
                    const { onMouseMove, ...optionProps } = getItemProps({ item, index });

                    // If it wants to render the buttons
                    return renderButtons ? (
                      <li
                        key={`result-${item.id}`}
                        // Remove the default padding
                        className={`${(className as string) || ''} p-0`}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onMouseMove={onMouseMove as any}
                      >
                        {/* Add back the padding only in this element, and allow it to grow */}
                        <span {...optionProps} className="px-2 py-4 flex-grow">
                          {item.label}
                        </span>
                        {/* Render the buttons */}
                        {renderButtons(item, isSelected)}
                      </li>
                    ) : (
                      <li
                        key={`result-${item.id}`}
                        className={className}
                        {...optionProps}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onMouseMove={onMouseMove as any}
                      >
                        {item.label}
                      </li>
                    );
                  })
                ) : (
                  <li className="pui-flex-center flex-col text-pui-paragraph-300">
                    <AttentionIcon className="my-2" />
                    {translations?.blankState || 'No results to show'}
                  </li>
                )
              }
            </>
          )}
        </ul>
      </div>

      {
        // If there's at least one selected item
        selectedItems && selectedItems.length > 0 && (
          // Render the selected items container
          <ul className="autocomplete-selected-list pui-dropdown-input-selected-options">
            {/* For each selected item */}
            {selectedItems.map((selectedItem, index) => (
              <li
                key={`selected-${selectedItem.id}`}
                className="autocomplete-selected-item pui-dropdown-input-selected-item-base pui-animate-scaleHover focus:outline-none"
                {...getSelectedItemProps({ selectedItem, index })}
              >
                <button
                  type="button"
                  className="pui-btn-default pui-chip-btn flex items-center"
                  onClick={() => toggleSelectedItem(selectedItem)}
                >
                  {selectedItem.label}
                  <CrossIcon className="pui-animate-scaleHover-target h-4 w-4 ml-2 mt-1" />
                </button>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
};
