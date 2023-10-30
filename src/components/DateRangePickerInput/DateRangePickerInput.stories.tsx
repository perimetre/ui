import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import classnames from 'classnames';
import { DateRangePickerInput, DateRangePickerProps } from '.';
import { colorOptions } from '../../prebuiltTailwindTheme';
import { puiColorClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/Inputs/DateRangePickerInput',
  component: DateRangePickerInput,
  argTypes: {
    color: {
      options: colorOptions,
      control: {
        type: 'select'
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
  },
  args: {
    id: 'input-id',
    label: 'Input',
    locale: 'en',
    color: 'pui-primary'
  }
} as Meta;

/**
 * A story that displays a DatePickerInput example
 *
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.className The input className
 */
const Template: StoryFn<DateRangePickerProps & { color?: string }> = ({ color, className, ...props }) => (
  <DateRangePickerInput
    {...props}
    className={classnames(
      {
        [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary'
      },
      className
    )}
  />
);

export const Text = Template.bind({});

export const LocalizedDate = Template.bind({});
LocalizedDate.args = {
  format: 'year//month//day'
};

export const BorderedPrimary = Template.bind({});
BorderedPrimary.args = {
  variant: 'bordered'
};

export const WithHelp = Template.bind({});
WithHelp.args = {
  help: 'You can also have a help text'
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'Input is required'
};
