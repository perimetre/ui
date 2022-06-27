import classnames from 'classnames';
import React from 'react';
import { AttentionIcon, CrossIcon } from '../Icons';
import { AutocompleteItemType, AutocompleteSettings, useAutocompleteInput } from './hook';

export type AutocompleteDropdownInputProps<T extends AutocompleteItemType = AutocompleteItemType> = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> &
  AutocompleteSettings<T> & {
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
 * A dropdown with autocomplete capabilities
 *
 * @param props the react component props
 * @param props.options The options that should be displayed in the dropdown
 * @param props.initialSelectedItems The list of selected items to initialize the selected array
 * @param props.isSingleSelect Whether or not the user is allowed to only select a single item or multiple items
 * @param props.displayRegardlessIfSearching Whether or not should always show the result list regardless if the user is searching or not.
 * @param props.displayRegardlessIfFocused Whether or not should always show the result list regardless if the input is focused or not
 * @param props.onItemToggle A callback that is called every time the user selects or unselects an item
 * @param props.transformItems  Modifies the items being displayed, for example, to filter or sort them. It takes items as argument and expects them back in return.
 * @param props.defaultValue The input defaultValue property
 * @param props.value The input value property
 * @param props.ignoreFilter Whether or not the options should be filtered based on user's input
 * @param props.onChange  The input onChange callback
 * @param props.label The text that should be placed in the input's label
 * @param props.translations A translation object to override existing translations
 * @param props.renderButtons The render function used to render the option buttons
 * @param props.displaySelected Keep selected items in dropdown list regardless.
 */
export const AutocompleteDropdownInput = <T extends AutocompleteItemType = AutocompleteItemType>({
  // Hook settings
  options = [],
  initialSelectedItems,
  isSingleSelect,
  displayRegardlessIfSearching,
  displayRegardlessIfFocused,
  onItemToggle,
  transformItems,
  defaultValue = '',
  value,
  ignoreFilter,
  onChange,
  displaySelected,
  // Component props
  label,
  translations,
  renderButtons,
  // Input props
  ...inputProps
}: AutocompleteDropdownInputProps<T>) => {
  const {
    isOpen,
    filteredOptions,
    selectedItems,
    getRootProps,
    getLabelProps,
    getComboboxProps,
    getInputProps,
    getMenuProps,
    getItemProps,
    getSelectedListProps,
    getSelectedItemProps,
    toggleSelectedItem
  } = useAutocompleteInput({
    id: inputProps?.id,
    options,
    initialSelectedItems,
    isSingleSelect,
    displayRegardlessIfSearching,
    displayRegardlessIfFocused,
    onItemToggle,
    transformItems,
    defaultValue,
    value,
    ignoreFilter,
    onChange,
    displaySelected
  });

  return (
    <div {...getRootProps()}>
      {label && <label {...getLabelProps({ className: 'pui-label-input' })}>{label}</label>}
      {/* Render the combo container for the input and the results */}
      <div
        // The parent must be relative so the child(result list/menu) position absolute works
        {...getComboboxProps({ className: 'pui-dropdown-input-container' })}
      >
        <input {...inputProps} {...getInputProps({ className: classnames('pui-text-input', inputProps?.className) })} />
        {/* The container for the results must be in the DOM at all times for accessibility reasons */}
        <ul {...getMenuProps({ className: 'pui-dropdown-input-options' })}>
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
                    // Get the complete classes
                    // Get the required props passed by downshift
                    const { onMouseMove, className, isSelected, ...optionProps } = getItemProps({
                      item,
                      index,
                      className: 'pui-dropdown-input-item flex items-center'
                    });

                    // If it wants to render the buttons
                    return renderButtons ? (
                      <li
                        key={`result-${item.id}`}
                        // Remove the default padding
                        className={classnames(className, 'p-0')}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onMouseMove={onMouseMove as any}
                      >
                        {/* Add back the padding only in this element, and allow it to grow */}
                        <span {...optionProps} className="px-2 py-4 grow">
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
          <ul {...getSelectedListProps({ className: 'pui-dropdown-input-selected-options' })}>
            {/* For each selected item */}
            {selectedItems.map((selectedItem, index) => (
              <li
                key={`selected-${selectedItem.id}`}
                {...getSelectedItemProps({
                  selectedItem,
                  index,
                  className: 'pui-dropdown-input-selected-item-base pui-animate-scaleHover focus:outline-none'
                })}
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
