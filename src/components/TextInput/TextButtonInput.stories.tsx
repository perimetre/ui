// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { TextButtonInput, TextButtonInputProps } from './TextButtonInput';

export default {
  title: 'Components/Inputs/Text Button',
  component: TextButtonInput,
  argTypes: {
    content: {
      defaultValue: 'Search',
      control: {
        type: 'text'
      }
    },
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
    onFocus: { action: 'onFocus' },
    onButtonClick: { action: 'onButtonClick' }
  }
} as Meta;

/**
 * A story that displays a TextAreaInput example
 *
 * @param props the story props
 * @param props.content the content property set on controls
 * @param props.onButtonClick the onButtonClick action from storybook
 */
const Template: Story<TextButtonInputProps & { content?: string; onButtonClick: () => void }> = ({
  content,
  onButtonClick,
  ...props
}) => (
  <TextButtonInput {...props} buttonProps={{ onClick: onButtonClick }}>
    {content}
  </TextButtonInput>
);

export const TextButton = Template.bind({});

export const WithHelp = Template.bind({});
WithHelp.args = {
  help: 'You can also have a help text'
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'Input is required'
};
