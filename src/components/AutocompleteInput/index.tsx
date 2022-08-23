// We turn off unused variables because in here. "props" are passed down to the input. But the react <input> element doesn't expect the same props as downshift. So we have to destructure them but not use it
/* eslint-disable @typescript-eslint/no-unused-vars */
import classnames from 'classnames';
import Downshift, { ControllerStateAndHelpers } from 'downshift';
import { debounce } from 'lodash';
import React, { useEffect, useMemo, useRef } from 'react';
import { AttentionIcon } from '../Icons';

export type AutocompleteInputProps<Item> = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value' | 'defaultValue'
> & {
  /**
   * The autocomplete input id
   */
  id: string;
  /**
   * The options that should be displayed in the dropdown
   */
  options: Item[];
  /**
   * The initial selected item
   */
  initialSelectedItem?: Item;
  /**
   * The initial selected item
   */
  selectedItem?: Item | null;
  /**
   * Whether or not should always show the result list regardless if the user is searching or not.
   *
   * @default false
   */
  displayRegardlessIfSearching?: boolean;
  /**
   * If provided, displays a help text under the input
   */
  help?: string;
  /**
   * The error text to replace the help text with
   */
  error?: string;
  /**
   * Shows a success status
   */
  success?: boolean;
  /**
   * The classname string prepended to the input container className
   */
  containerClassName?: string;
  /**
   * Whether or not should always show the result list regardless if the input is focused or not
   * (Only relevant when using TAB to focus the input)
   *
   * @default true
   */
  // displayRegardlessIfFocused?: boolean;
  /**
   * A callback that is called every time the user selects or unselects an item
   */
  onItemToggle?: (item?: Item | null) => void;
  /**
   *  The input defaultValue property
   */
  defaultValue?: string;
  /**
   * Whether or not the options should be filtered based on user's input
   */
  ignoreFilter?: boolean;
  /**
   * Predicate to modify the items on display, for example, filter based on the value
   */
  filterItem: (item: Item, inputValue: string) => boolean;
  /**
   * Method used to convert the object item into the string that is shown on the dropdown
   */
  itemToString: (item: Item | null) => string;
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
  renderButtons?: (item: Item, isSelected: boolean, isHighlighted: boolean) => React.ReactNode;
  /**
   * The render function used to render the dropdown item
   */
  renderItem?: (item: Item, isSelected: boolean, isHighlighted: boolean) => React.ReactNode;
  /**
   * The render function used to render the blank slate
   */
  renderBlankState?: (selectItem: (item: Item) => void) => React.ReactNode;
  /**
   * The component classname
   */
  className?: string;
  /**
   * A callback for when the input changes so more items can be loaded
   */
  fetchMore?: (value: string | null | undefined) => Promise<void>;
  /**
   * Whether or not the options should be fetched on init
   */
  shouldFetchOnInit?: boolean;
  /**
   * Whether the options are loading
   */
  loading?: boolean;
};

type DownshiftAutocompleteContentProps<Item> = ControllerStateAndHelpers<Item> & AutocompleteInputProps<Item>;

/**
 * A simple input with autocomplete capabilities
 *
 * @param props the react component props
 * @param props.options The options that should be displayed in the dropdown
 * @param props.initialSelectedItem The initial selected item
 * @param props.displayRegardlessIfSearching Whether or not should always show the result list regardless if the user is searching or not.
 * @param props.help If provided, displays a help text under the input
 * @param props.error The error text to replace the help text with
 * @param props.success Shows a success status
 * @param props.containerClassName The classname string prepended to the input container className
 * @param props.onItemToggle A callback that is called every time the user selects or unselects an item
 * @param props.defaultValue The input defaultValue property
 * @param props.ignoreFilter Whether or not the options should be filtered based on user's input
 * @param props.filterItem Predicate to modify the items on display, for example, filter based on the value
 * @param props.itemToString Method used to convert the object item into the string that is shown on the dropdown
 * @param props.label The text that should be placed in the input's label
 * @param props.translations A translation object to override existing translations
 * @param props.renderButtons The render function used to render the option buttons
 * @param props.renderItem The render function used to render the dropdown item
 * @param props.renderBlankState The render function used to render the blank slate
 * @param props.className The component classname
 * @param props.fetchMore A callback for when the input changes so more items can be loaded
 * @param props.shouldFetchOnInit Whether or not the options should be fetched on init
 * @param props.loading Whether the options are loading
 * @param props.getInputProps Downshift getInputProps
 * @param props.getItemProps Downshift getItemProps
 * @param props.getLabelProps Downshift getLabelProps
 * @param props.getMenuProps Downshift getMenuProps
 * @param props.isOpen Downshift isOpen
 * @param props.inputValue Downshift inputValue
 * @param props.highlightedIndex Downshift highlightedIndex
 * @param props.toggleMenu Downshift toggleMenu
 * @param props.initialSelectedItem The item to already start selected if any
 * @param props.clearItems Clear the list of items
 * @param props.clearSelection Clear the currently selected item
 * @param props.openMenu Open the dropdown
 * @param props.closeMenu Close the dropdown
 * @param props.getRootProps Method used to get props for the autocomplete wrapper
 * @param props.getToggleButtonProps Method used to get props for the toggle button
 * @param props.id The input id if any
 * @param props.reset Reset the entire state
 * @param props.selectHighlightedItem Select the currently highlighted item
 * @param props.selectItem Select an item
 * @param props.selectItemAtIndex Select the item from the index
 * @param props.selectedItem The currently selected item
 * @param props.setHighlightedIndex Set the index of what should be highlighted
 * @param props.setItemCount Set the number of items the array currently has
 * @param props.setState Set the entire downshift state
 * @param props.unsetItemCount Reset the number of items the array currently has
 */
const DownshiftAutocompleteContent = <Item extends { id: string | number }>({
  // Autocomplete props
  options,
  initialSelectedItem,
  displayRegardlessIfSearching,
  // displayRegardlessIfFocused,
  onItemToggle,
  defaultValue,
  ignoreFilter,
  filterItem,
  itemToString,
  label,
  translations,
  renderButtons,
  renderItem,
  className,
  fetchMore,
  shouldFetchOnInit,
  loading,
  renderBlankState,

  // Downshift props
  getInputProps,
  getItemProps,
  getLabelProps,
  getMenuProps,
  isOpen,
  inputValue,
  highlightedIndex,
  toggleMenu,
  clearItems,
  clearSelection,
  closeMenu,
  getRootProps,
  getToggleButtonProps,
  openMenu,
  reset,
  selectHighlightedItem,
  selectItem,
  selectItemAtIndex,
  selectedItem,
  setHighlightedIndex,
  setItemCount,
  setState,
  unsetItemCount,
  containerClassName,
  error,
  success,
  help,

  ...props
}: DownshiftAutocompleteContentProps<Item> &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue'>) => {
  // I use ref instead of state for this, because I don't want it to trigger an effect or re-render.
  // I could simply not use it on the deps array, BUT then the value wouldn't be up to date inside the effect scope
  const isFetchingRef = useRef(false);
  const didInitializeRef = useRef(false);

  const fetchMoreDebounced = useMemo(() => (fetchMore ? debounce(fetchMore, 250, { maxWait: 500 }) : undefined), [
    fetchMore
  ]);

  useEffect(() => {
    /**
     * Creates a function so we can use async inside useEffect
     */
    const fetch = async () => {
      // If haven't initialized it yet, it's on the first render
      if (!shouldFetchOnInit && !didInitializeRef.current) return;

      if (!isFetchingRef.current && fetchMoreDebounced) {
        isFetchingRef.current = true;
        await fetchMoreDebounced(inputValue);
        isFetchingRef.current = false;
      }
    };

    fetch();
  }, [fetchMoreDebounced, inputValue, shouldFetchOnInit]);

  useEffect(() => {
    // This is needed so the fetchMore function is not called on the first render
    if (!didInitializeRef.current) {
      didInitializeRef.current = true;
    }
  }, []);

  const items = useMemo(
    () =>
      // If we don't want to ignore
      !ignoreFilter
        ? options // We filter
            // Filter the results
            ?.filter(
              (item) =>
                !inputValue ||
                (filterItem ? filterItem(item, inputValue) : itemToString(item).toLowerCase().includes(inputValue))
            )
        : // If we want to ignore we just return it as is
          options,
    [filterItem, ignoreFilter, inputValue, itemToString, options]
  );

  return (
    <div>
      {label && <label {...getLabelProps({ className: 'pui-label-input' })}>{label}</label>}
      {/* Render the combo container for the input and the results */}
      <div
        className={classnames('pui-dropdown-input-container', {
          error: !!error,
          success: success
        })}
      >
        {/* <span
          className={classnames(containerClassName, {
            'pui-text-input-error': !!error,
            'pui-text-input-success': success,
            'pui-text-input-loading': loading
          })}
        > */}
        <input
          {...getInputProps({
            className: classnames('pui-text-input', className),
            ...props
          })}
          onClick={() => !isOpen && toggleMenu()}
        />
        {/* </span> */}
        {/* <button aria-label={'toggle menu'} className="p-2" type="button" {...getToggleButtonProps()}></button> */}

        {/* The container for the results must be in the DOM at all times for accessibility reasons */}
        <ul {...getMenuProps({ className: classnames('pui-dropdown-input-options', !isOpen && 'hidden') })}>
          {/* Only render this if open */}
          {isOpen &&
            (!loading ? (
              <>
                <li className="italic py-2 px-4 text-sm text-pui-paragraph-300">
                  {translations?.explanation || 'Press enter to select, ↑↓ to navigate, esc to dismiss'}
                </li>
                {items && items.length > 0 ? (
                  // Display the results
                  items.map((item, index) => {
                    const itemString = itemToString(item);
                    // Get the complete classes
                    // Get the required props passed by downshift
                    const { className, isSelected, key, ...optionProps } = getItemProps({
                      key: `result-${item.id || index}`,
                      item,
                      index,
                      className: 'pui-dropdown-input-item flex items-center'
                    });

                    const isHighlighted = highlightedIndex === index;

                    // If it wants to render the buttons
                    return renderButtons ? (
                      <li
                        key={key}
                        // Remove the default padding
                        className={classnames(
                          className,
                          isHighlighted && 'highlighted',
                          'p-0 whitespace-pre-wrap pr-2'
                        )}
                      >
                        {/* Add back the padding only in this element, and allow it to grow */}
                        <span {...optionProps} className="px-2 py-4 grow">
                          {renderItem ? renderItem(item, isSelected, isHighlighted) : itemString}
                        </span>
                        {/* Render the buttons */}
                        {renderButtons(item, isSelected, isHighlighted)}
                      </li>
                    ) : (
                      <li
                        key={key}
                        className={classnames(className, isHighlighted && 'highlighted', 'whitespace-pre-wrap pr-2')}
                        {...optionProps}
                      >
                        {renderItem ? renderItem(item, isSelected, isHighlighted) : itemString}
                      </li>
                    );
                  })
                ) : renderBlankState ? (
                  renderBlankState(selectItem)
                ) : (
                  <li className="pui-flex-center flex-col text-pui-paragraph-300">
                    <AttentionIcon className="my-2" />
                    {translations?.blankState || 'No results to show'}
                  </li>
                )}
              </>
            ) : (
              <div className="p-2">
                <div className="flex items-center justify-center pui-spinner" />
              </div>
            ))}
        </ul>
      </div>
      {help && !error && <p className="pui-help-text-input">{help}</p>}
      {error && <p className="pui-animate-fadeDown pui-help-text-input text-pui-error">{error}</p>}
    </div>
  );
};

/**
 * A simple input with autocomplete capabilities
 *
 * @param props the react component props
 * @param props.options The options that should be displayed in the dropdown
 * @param props.initialSelectedItem The initial selected item
 * @param props.selectedItem The selected item
 * @param props.displayRegardlessIfSearching Whether or not should always show the result list regardless if the user is searching or not.
 * @param props.onItemToggle A callback that is called every time the user selects or unselects an item
 * @param props.defaultValue The input defaultValue property
 * @param props.ignoreFilter Whether or not the options should be filtered based on user's input
 * @param props.filterItem Predicate to modify the items on display, for example, filter based on the value
 * @param props.itemToString Method used to convert the object item into the string that is shown on the dropdown
 * @param props.label The text that should be placed in the input's label
 * @param props.translations A translation object to override existing translations
 * @param props.renderButtons The render function used to render the option buttons
 * @param props.renderItem The render function used to render the dropdown item
 * @param props.className The component classname
 * @param props.fetchMore A callback for when the input changes so more items can be loaded
 * @param props.shouldFetchOnInit Whether or not the options should be fetched on init
 * @param props.loading Whether the options are loading
 */
export const AutocompleteInput = <Item extends { id: string | number } = { id: string | number }>(
  props: AutocompleteInputProps<Item>
) => {
  const {
    itemToString,
    onItemToggle,
    initialSelectedItem,
    selectedItem,
    defaultValue,
    displayRegardlessIfSearching
    // displayRegardlessIfFocused
  } = props;

  return (
    <Downshift
      onChange={onItemToggle}
      itemToString={itemToString}
      initialSelectedItem={initialSelectedItem}
      selectedItem={selectedItem}
      initialInputValue={defaultValue}
      defaultIsOpen={
        displayRegardlessIfSearching !== undefined && displayRegardlessIfSearching === true ? true : undefined
      }
    >
      {(autocompleteProps) => (
        <div {...autocompleteProps.getRootProps({ refKey: 'ref' }, { suppressRefError: true })}>
          <DownshiftAutocompleteContent {...props} {...autocompleteProps} />
        </div>
      )}
    </Downshift>
  );
};
