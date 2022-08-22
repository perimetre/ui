// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useMemo, useState } from 'react';
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

export const InitialText = Template.bind({});
InitialText.args = {
  defaultValue: 'Option 999'
};

/**
 * A story that displays an Autocomplete example
 *
 * @param props the story props
 */
const ControlledTemplate: Story<AutocompleteInputProps<{ id: number; label: string }>> = (props) => {
  const options = useMemo(
    () =>
      Array(10)
        .fill(null)
        .map((_, i) => ({
          id: i,
          label: `Option ${i + 1}`
        })),
    []
  );

  const [state, setState] = useState<{ id: number; label: string } | undefined>(options[1]);

  return (
    <AutocompleteInput
      {...props}
      id="storybook-autocomplete"
      options={options}
      itemToString={(item) => (item ? item.label : '')}
      filterItem={(item, inputValue) => item.label.toLowerCase().includes(inputValue.toLowerCase())}
      selectedItem={state || null}
      onItemToggle={(item) => setState(item || undefined)}
      onChange={(e) => {
        if (e.target.value === '') {
          setState(undefined);
        }
      }}
    />
  );
};

export const Controlled = ControlledTemplate.bind({});
