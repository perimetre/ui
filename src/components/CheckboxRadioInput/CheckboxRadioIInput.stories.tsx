/* eslint-disable jsx-a11y/anchor-is-valid */
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { colorOptions } from '../../prebuiltTailwindTheme';
import classnames from 'classnames';
import { CheckboxRadioInput, CheckboxRadioInputProps } from '.';
import { puiColorClassnameMap } from '../../storybookMappers';

const labels = {
  string: 'Label text content',
  jsx: (
    <p>
      Agree with{' '}
      <a href="#" target="_blank" rel="noreferrer noopener" className="pui-link">
        terms
      </a>
    </p>
  )
};

export default {
  title: 'Components/Inputs/Checkbox Radio',
  component: CheckboxRadioInput,
  argTypes: {
    color: {
      options: colorOptions,
      control: {
        type: 'select'
      }
    },
    label: {
      options: Object.keys(labels),
      mapping: labels,
      control: {
        type: 'select',
        labels: {
          string: 'Text label',
          jsx: 'JSX component'
        }
      }
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
  },
  args: {
    type: 'checkbox',
    color: 'pui-primary',
    label: labels.string
  }
} as Meta;

/**
 * A story that displays a WithLabel example
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.className the component classes
 */
const Template: StoryFn<
  CheckboxRadioInputProps & {
    color?: keyof typeof puiColorClassnameMap;
  }
> = ({ color, className, ...props }) => (
  <CheckboxRadioInput
    {...props}
    className={classnames({ [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary' }, className)}
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

export const JSXLabel = Template.bind({});
JSXLabel.args = {
  label: labels.jsx
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
