import classnames from 'classnames';
import Downshift, { ControllerStateAndHelpers } from 'downshift';
import React, { useEffect } from 'react';

export type AutocompleteInputProps<T extends Record<string, unknown> = Record<string, unknown>> =
  // Omit<
  //   React.InputHTMLAttributes<HTMLInputElement>,
  //   'onChange' | 'value' | 'defaultValue'
  // > &
  {
    /**
     * The autocomplete input id
     */
    id: string;
    /**
     * The options that should be displayed in the dropdown
     */
    options?: T[];
    /**
     * Whether or not should always show the result list regardless if the user is searching or not.
     *
     * @default false
     */
    displayRegardlessIfSearching?: boolean;
    /**
     * Whether or not should always show the result list regardless if the input is focused or not
     * (Only relevant when using TAB to focus the input)
     *
     * @default true
     */
    displayRegardlessIfFocused?: boolean;
    /**
     * A callback that is called every time the user selects or unselects an item
     */
    onItemToggle?: (item?: T | null) => void;
    filterItem: (item: T, inputValue: string) => boolean;
    itemToString: (item: T | null) => string;
    /**
     * Keep selected items in dropdown list regardless.
     */
    displaySelected?: boolean;

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
    renderButtons?: (item: T, isSelected: boolean, isHighlighted: boolean) => React.ReactNode;
    /**
     * The render function used to render the option buttons
     */
    renderItem?: (item: T, isSelected: boolean, isHighlighted: boolean) => React.ReactNode;

    className?: string;

    onChange?: (value?: string | null) => void;
  };

type DownshiftAutocompleteContentProps<
  T extends Record<string, unknown> = Record<string, unknown>
> = ControllerStateAndHelpers<T> & AutocompleteInputProps<T>;

const DownshiftAutocompleteContent = <T extends Record<string, unknown> = Record<string, unknown>>({
  // Autocomplete props
  label,
  options,
  filterItem,
  renderButtons,
  translations,
  renderItem,
  itemToString,
  className,
  onChange,

  // Downshift props
  getInputProps,
  getItemProps,
  getLabelProps,
  getMenuProps,
  isOpen,
  inputValue,
  highlightedIndex,
  toggleMenu
}: DownshiftAutocompleteContentProps<T>) => {
  useEffect(() => onChange && onChange(inputValue), [inputValue, onChange]);

  return (
    <>
      {label && <label {...getLabelProps({ className: 'pui-label-input' })}>{label}</label>}
      {/* Render the combo container for the input and the results */}
      <div className="pui-dropdown-input-container">
        <input
          {...getInputProps({ className: classnames('pui-text-input', className) })}
          onClick={() => !isOpen && toggleMenu()}
        />
        {/* <button aria-label={'toggle menu'} className="p-2" type="button" {...getToggleButtonProps()}></button> */}

        {/* The container for the results must be in the DOM at all times for accessibility reasons */}
        <ul {...getMenuProps({ className: classnames('pui-dropdown-input-options', !isOpen && 'hidden') })}>
          {/* Only render this if open */}
          {isOpen && (
            <>
              <li className="italic py-2 px-4 text-sm text-pui-paragraph-300">
                {translations?.explanation || 'Press enter to select, ↑↓ to navigate, esc to dismiss'}
              </li>
              {options
                // Filter the results
                ?.filter(
                  (item) =>
                    !inputValue ||
                    (filterItem ? filterItem(item, inputValue) : itemToString(item).toLowerCase().includes(inputValue))
                )
                // Display the results
                .map((item, index) => {
                  const itemString = itemToString(item);
                  // Get the complete classes
                  // Get the required props passed by downshift
                  const { className, isSelected, ...optionProps } = getItemProps({
                    key: itemString,
                    item,
                    index,
                    className: 'pui-dropdown-input-item flex items-center'
                  });

                  const isHighlighted = highlightedIndex === index;

                  // If it wants to render the buttons
                  return renderButtons ? (
                    <li
                      key={`result-${item.id}`}
                      // Remove the default padding
                      className={classnames(className, isHighlighted && 'highlighted', 'p-0')}
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
                      key={`result-${item.id}`}
                      className={classnames(className, isHighlighted && 'highlighted')}
                      {...optionProps}
                    >
                      {renderItem ? renderItem(item, isSelected, isHighlighted) : itemString}
                    </li>
                  );
                })}
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export const AutocompleteInput = <T extends Record<string, unknown> = Record<string, unknown>>(
  props: AutocompleteInputProps<T>
) => {
  const { itemToString, onItemToggle } = props;

  return (
    <Downshift onChange={onItemToggle} itemToString={itemToString}>
      {(autocompleteProps) => (
        <div {...autocompleteProps.getRootProps({ refKey: 'ref' }, { suppressRefError: true })}>
          <DownshiftAutocompleteContent {...props} {...autocompleteProps} />
        </div>
      )}
    </Downshift>
  );
};
