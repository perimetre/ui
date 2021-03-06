// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { AutocompleteInput, AutocompleteInputProps } from './AutocompleteInput';
import { MenuIcon } from '../Icons';

export default {
  title: 'Components/Inputs/Autocomplete',
  component: AutocompleteInput,
  argTypes: {
    label: {
      defaultValue: 'Autocomplete Input'
    },
    onItemToggle: { action: 'onItemToggle' }
  }
} as Meta;

/**
 * A story that displays an Autocomplete example
 *
 * @param props the story props
 */
const Template: Story<AutocompleteInputProps> = (props) => (
  <AutocompleteInput
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

export const Autocomplete = Template.bind({});

export const SingleSelect = Template.bind({});
SingleSelect.args = {
  isSingleSelect: true
};

/**
 * A story that displays an Autocomplete example
 *
 * @param props the story props
 */
const WithButtonsTemplate: Story = (props) => (
  <AutocompleteInput
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

export const WithButtons = WithButtonsTemplate.bind({});
