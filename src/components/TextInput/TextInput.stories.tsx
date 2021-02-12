// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { TextInput, TextInputProps } from './TextInput';

export default {
  title: 'Components/Inputs/Text',
  component: TextInput,
  argTypes: {
    id: { defaultValue: 'input-id' },
    label: { defaultValue: 'Input' },
    placeholder: {
      defaultValue: 'Type here...',
      control: {
        type: 'text'
      }
    },
    defaultValue: {
      control: {
        type: 'text'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    readOnly: {
      control: {
        type: 'boolean'
      }
    },
    className: {
      control: {
        type: 'text'
      }
    },
    onChange: { action: 'onChange' },
    onBlur: { action: 'onBlur' },
    onFocus: { action: 'onFocus' }
  }
} as Meta;

/**
 * A story that displays a TextInput example
 *
 * @param props the story props
 */
const Template: Story<TextInputProps> = (props) => <TextInput {...props} />;

export const Text = Template.bind({});

export const WithHelp = Template.bind({});
WithHelp.args = {
  help: 'You can also have a help text'
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'Input is required'
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  containerClassName: 'pui-absolute-icon-right-padded pui-icon-question after:pui-color-pui-paragraph-500'
};

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  containerClassName: 'pui-absolute-icon-left-padded pui-icon-bell after:pui-color-pui-paragraph-500'
};

/**
 * A story that displays a TextInput example with datalist
 *
 * @param props the story props
 */
const DataListTemplate: Story<TextInputProps> = (props) => (
  <TextInput {...props} list="listOptions">
    <datalist id="listOptions">
      {Array(10)
        .fill(null)
        .map((_, i) => (
          <option key={i} value={`Option ${i + 1}`}>
            Option {i + 1}
          </option>
        ))}
    </datalist>
  </TextInput>
);

export const DataList = DataListTemplate.bind({});
