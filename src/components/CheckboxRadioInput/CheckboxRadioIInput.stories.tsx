// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { colorOptions } from '../../prebuiltTailwindTheme';
import classnames from 'classnames';
import { CheckboxRadioInput, CheckboxRadioInputProps } from '.';

export default {
  title: 'Components/Inputs/Checkbox Radio',
  component: CheckboxRadioInput,
  argTypes: {
    type: {
      defaultValue: 'checkbox'
    },
    color: {
      defaultValue: 'pui-primary',
      control: {
        type: 'select',
        options: colorOptions
      }
    },
    label: {
      defaultValue: 'Label content'
    },
    defaultChecked: {
      control: {
        type: 'boolean'
      }
    },
    disabled: {
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
 * A story that displays a WithLabel example
 *
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.className the component classes
 */
const Template: Story<CheckboxRadioInputProps> = ({ color, className, ...props }) => (
  <CheckboxRadioInput
    {...props}
    className={classnames({ [`pui-color-${color}`]: color !== 'pui-primary' }, className)}
  />
);

export const WithLabel = Template.bind({});

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: undefined
};

export const WithHelp = Template.bind({});
WithHelp.args = {
  help: 'You can also have a help text'
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'Input is required'
};

export const RadioWithLabel = Template.bind({});
RadioWithLabel.args = {
  type: 'radio'
};

export const RadioNoLabel = Template.bind({});
RadioNoLabel.args = {
  type: 'radio',
  label: undefined
};
