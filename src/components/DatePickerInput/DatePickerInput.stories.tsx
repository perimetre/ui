import { Meta, StoryFn } from '@storybook/react';
import { now, getLocalTimeZone } from '@internationalized/date';
import React from 'react';
import classnames from 'classnames';
import { DatePickerInput, DatePickerProps } from '.';
import { colorOptions } from '../../prebuiltTailwindTheme';
import { puiColorClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/Inputs/DatePickerInput',
  component: DatePickerInput,
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
const Template: StoryFn<DatePickerProps & { color?: string }> = ({ color, className, ...props }) => (
  <DatePickerInput
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

export const Time = Template.bind({});
Time.args = {
  granularity: 'minute'
};

export const Time24Hours = Template.bind({});
Time24Hours.args = {
  granularity: 'minute',
  hourCycle: 24
};

/**
 * A story that displays a DatePickerInput example
 *
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.className The input className
 */
const LocalTimezoneTemplate: StoryFn<DatePickerProps & { color?: string }> = ({ color, className, ...props }) => {
  return (
    <DatePickerInput
      {...props}
      className={classnames(
        {
          [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary'
        },
        className
      )}
      granularity="minute"
      placeholderValue={now(getLocalTimeZone())}
    />
  );
};

export const LocalTimezone = LocalTimezoneTemplate.bind({});

/**
 * A story that displays a DatePickerInput example
 *
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.className The input className
 */
const OtherTimezoneTemplate: StoryFn<DatePickerProps & { color?: string }> = ({ color, className, ...props }) => {
  return (
    <DatePickerInput
      {...props}
      className={classnames(
        {
          [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary'
        },
        className
      )}
      granularity="minute"
      placeholderValue={now('Europe/Paris')}
    />
  );
};

export const OtherTimezone = OtherTimezoneTemplate.bind({});
