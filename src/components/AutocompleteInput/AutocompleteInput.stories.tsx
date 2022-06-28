// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { AutocompleteInput, AutocompleteInputProps } from './index';

export default {
  title: 'Components/Inputs/Autocomplete',
  component: AutocompleteInput,
  argTypes: {
    label: {
      defaultValue: 'Autocomplete Input'
    },
    onItemToggle: { action: 'onItemToggle' },
    fetchMore: { action: 'fetchMore' }
  }
} as Meta;

/**
 * A story that displays an Autocomplete example
 *
 * @param props the story props
 */
const Template: Story<AutocompleteInputProps<{ id: number; label: string }>> = (props) => {
  const options = Array(10)
    .fill(null)
    .map((_, i) => ({
      id: i,
      label: `Option ${i + 1}`
    }));
  return (
    <AutocompleteInput
      {...props}
      id="storybook-autocomplete"
      options={options}
      itemToString={(item) => (item ? item.label : '')}
      filterItem={(item, inputValue) => item.label.toLowerCase().includes(inputValue.toLowerCase())}
    />
  );
};

export const Input = Template.bind({});
