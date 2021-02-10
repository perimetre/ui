// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

export default {
  title: 'Components/Inputs/Text',
  argTypes: {
    label: {
      defaultValue: 'Input',
      control: {
        type: 'text'
      }
    },
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
    error: {
      control: {
        type: 'boolean'
      }
    },
    success: {
      control: {
        type: 'boolean'
      }
    },
    loading: {
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
 * @param props.label the label property set on controls
 * @param props.error the error property set on controls
 * @param props.success the success property set on controls
 * @param props.loading the loading property set on controls
 * @param props.className the component classes
 */
const Template: Story = ({ label, error, success, loading, className, ...props }) => (
  <div>
    <label className="pui-label-input" htmlFor="input">
      {label}
    </label>
    <span
      className={[
        ...(error ? ['pui-text-input-error'] : []),
        ...(success ? ['pui-text-input-success'] : []),
        ...(loading ? ['pui-text-input-loading'] : [])
      ].join(' ')}
    >
      <input
        {...props}
        id="input"
        className={[
          `pui-text-input`,
          // Add remaining classes
          ...(className && className.length > 0 ? [className] : [])
        ].join(' ')}
      />
    </span>
    {error && <div />}
  </div>
);

export const TextInput = Template.bind({});

/**
 * A story that displays a TextInput example
 *
 * @param props the story props
 * @param props.label the label property set on controls
 * @param props.error the error property set on controls
 * @param props.success the success property set on controls
 * @param props.loading the loading property set on controls
 * @param props.className the component classes
 */
const TextAreaTemplate: Story = ({ label, error, success, loading, className, ...props }) => (
  <div>
    <label className="pui-label-input" htmlFor="input">
      {label}
    </label>
    <span
      className={[
        ...(error ? ['pui-text-input-error'] : []),
        ...(success ? ['pui-text-input-success'] : []),
        ...(loading ? ['pui-text-input-loading'] : [])
      ].join(' ')}
    >
      <textarea
        {...props}
        rows={3}
        id="input"
        className={[
          `pui-text-input`,
          // Add remaining classes
          ...(className && className.length > 0 ? [className] : [])
        ].join(' ')}
      ></textarea>
    </span>
    {error && <div />}
  </div>
);

export const TextArea = TextAreaTemplate.bind({});

/**
 * A story that displays a TextInput example
 *
 * @param props the story props
 * @param props.label the label property set on controls
 * @param props.error the error property set on controls
 * @param props.success the success property set on controls
 * @param props.loading the loading property set on controls
 * @param props.className the component classes
 */
const WithButtonTemplate: Story = ({ label, error, success, loading, className, ...props }) => (
  <div>
    <label className="pui-label-input" htmlFor="input">
      {label}
    </label>
    {/* A flex container that will align the input and button together. Items strech is what will make them the same height */}
    <div className="pui-flex-center items-stretch">
      {/* The status wrapper */}
      <span
        className={[
          'w-full',
          ...(error ? ['pui-text-input-error'] : []),
          ...(success ? ['pui-text-input-success'] : []),
          ...(loading ? ['pui-text-input-loading'] : [])
        ].join(' ')}
      >
        <input
          {...props}
          id="input"
          className={[
            // A normal input
            `pui-text-input`,
            // Remove the rouded corner in the right side
            `rounded-r-none`,
            // Remove the border in the right side
            `border-r-0`,
            // Add remaining classes
            ...(className && className.length > 0 ? [className] : [])
          ].join(' ')}
        />
      </span>
      {/* Adds a button WITH NO SIZE, and without rouded corners on the left side */}
      <button type="button" className="pui-btn-default rounded-l-none">
        Search
      </button>
    </div>
    {error && <div />}
  </div>
);

export const WithButton = WithButtonTemplate.bind({});

// TODO: Add "With icon"
