// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import classnames from 'classnames';
import { DateRangePickerInput, DateRangePickerProps } from '.';
import { colorOptions } from '../../prebuiltTailwindTheme';
import { puiColorClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/Inputs/DateRangePickerInput',
  component: DateRangePickerInput,
  argTypes: {
    id: { defaultValue: 'input-id' },
    label: { defaultValue: 'Input' },
    locale: { defaultValue: 'en' },
    color: {
      defaultValue: 'pui-primary',
      control: {
        type: 'select',
        options: colorOptions
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
 * A story that displays a DatePickerInput example
 *
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.className The input className
 */
const Template: Story<DateRangePickerProps & { color?: string }> = ({ color, className, ...props }) => (
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
