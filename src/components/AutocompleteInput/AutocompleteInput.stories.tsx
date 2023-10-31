import { Meta, StoryFn } from '@storybook/react';
import React, { useMemo, useState } from 'react';
import { AutocompleteInput, AutocompleteInputProps } from './index';

export default {
  title: 'Components/Inputs/Autocomplete',
  component: AutocompleteInput,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    onItemToggle: { action: 'onItemToggle' },
    fetchMore: { action: 'fetchMore' }
  },
  args: {
    label: 'Autocomplete Input',
    disabled: false
  }
} as Meta;

/**
 * A story that displays an Autocomplete example
 * @param props the story props
 */
const Template: StoryFn<AutocompleteInputProps<{ id: number; label: string }>> = (props) => {
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

export const WithHelp = Template.bind({});
WithHelp.args = {
  help: 'You can also have a help text'
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'Input is required'
};

/**
 * A story that displays an Autocomplete example
 * @param props the story props
 */
const ControlledTemplate: StoryFn<AutocompleteInputProps<{ id: number; label: string }>> = (props) => {
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
