import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { AutocompleteDropdownInput, AutocompleteDropdownInputProps } from './AutocompleteDropdownInput';
import { MenuIcon } from '../Icons';

export default {
  title: 'Components/Inputs/Autocomplete',
  component: AutocompleteDropdownInput,
  argTypes: {
    onItemToggle: { action: 'onItemToggle' }
  },
  args: {
    label: 'Autocomplete Dropdown Input'
  }
} as Meta;

/**
 * A story that displays an Autocomplete example
 *
 * @param props the story props
 */
const Template: StoryFn<AutocompleteDropdownInputProps> = (props) => (
  <AutocompleteDropdownInput
    {...props}
    id="storybook-autocomplete"
    options={Array(10)
      .fill(null)
      .map((_, i) => ({
        id: i,
        label: `Option ${i + 1}`
      }))}
  />
);

export const Dropdown = Template.bind({});

export const DropdownSingleSelect = Template.bind({});
DropdownSingleSelect.args = {
  isSingleSelect: true
};

/**
 * A story that displays an Autocomplete example
 *
 * @param props the story props
 */
const DropdownWithButtonsTemplate: StoryFn = (props) => (
  <AutocompleteDropdownInput
    {...props}
    id="storybook-autocomplete"
    options={Array(10)
      .fill(null)
      .map((_, i) => ({
        id: i,
        label: `Option ${i + 1}`
      }))}
    renderButtons={(item) => (
      <button
        type="button"
        className="pui-btn-icon pui-color-pui-primary"
        onClick={() => alert(`Clicked on ${item.label}`)}
      >
        <MenuIcon className="pui-animate-scaleHover-target" />
      </button>
    )}
  />
);

export const DropdownWithButtons = DropdownWithButtonsTemplate.bind({});

/**
 * A story that displays an Autocomplete example
 *
 * @param props the story props
 */
const ChipsFullSizeTemplate: StoryFn<AutocompleteDropdownInputProps> = (props) => (
  <AutocompleteDropdownInput
    {...props}
    id="storybook-autocomplete"
    options={Array(10)
      .fill(null)
      .map((_, i) => ({
        id: i,
        label: `Option Option Option Option Option Option Option Option ${i + 1}`
      }))}
  />
);

export const ChipsFullSize = ChipsFullSizeTemplate.bind({});
ChipsFullSize.args = {
  chipFullSize: true
};
