// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

export default {
  title: 'Components/Inputs/Select Input',
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
    multiple: {
      control: {
        type: 'boolean'
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
 * A story that displays a Select Input example
 *
 * @param props the story props
 * @param props.label the label property set on controls
 * @param props.multiple the multiple property set on controls
 * @param props.error the error property set on controls
 * @param props.success the success property set on controls
 * @param props.loading the loading property set on controls
 * @param props.className the component classes
 */
const Template: Story = ({ label, multiple, error, success, loading, className, ...props }) => (
  <div>
    <label className="pui-label-input" htmlFor="input">
      {label}
    </label>
    <div
      className={[
        'pui-select-input-container',
        ...(!multiple ? ['pui-select-input-icon'] : []),
        ...(error ? ['pui-text-input-error'] : []),
        ...(success ? ['pui-text-input-success'] : []),
        ...(loading ? ['pui-text-input-loading'] : [])
      ].join(' ')}
    >
      <select
        {...props}
        id="input"
        className={[
          // Add remaining classes
          ...(className && className.length > 0 ? [className] : [])
        ].join(' ')}
        multiple={multiple}
      >
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <option key={i} value={`option-${i}`}>
              Option {i + 1}
            </option>
          ))}
      </select>
    </div>
    {error && <div />}
  </div>
);

export const SelectInput = Template.bind({});

/**
 * A story that displays a Select Input example
 *
 * @param props the story props
 * @param props.label the label property set on controls
 * @param props.multiple the multiple property set on controls
 * @param props.error the error property set on controls
 * @param props.success the success property set on controls
 * @param props.loading the loading property set on controls
 * @param props.className the component classes
 */
const OptionGroupTemplate: Story = ({ label, multiple, error, success, loading, className, ...props }) => (
  <div>
    <label className="pui-label-input" htmlFor="input">
      {label}
    </label>
    <div
      className={[
        'pui-select-input-container',
        ...(!multiple ? ['pui-select-input-icon'] : []),
        ...(error ? ['pui-text-input-error'] : []),
        ...(success ? ['pui-text-input-success'] : []),
        ...(loading ? ['pui-text-input-loading'] : [])
      ].join(' ')}
    >
      <select
        {...props}
        id="input"
        className={[
          // Add remaining classes
          ...(className && className.length > 0 ? [className] : [])
        ].join(' ')}
        multiple={multiple}
      >
        <optgroup label="First list">
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <option key={i} value={`option-${i}`}>
                Option {i + 1}
              </option>
            ))}
        </optgroup>
        <optgroup label="Second list">
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <option key={i} value={`option-${i}`} disabled={i > 2 && i < 7}>
                Option {i + 1}
              </option>
            ))}
        </optgroup>
      </select>
    </div>
    {error && <div />}
  </div>
);

export const OptionGroups = OptionGroupTemplate.bind({});
