// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useEffect } from 'react';
import { colorOptions } from '../../prebuiltTailwindTheme';

export default {
  title: 'Components/Inputs/Checkbox-Radio',
  argTypes: {
    size: {
      defaultValue: 'medium',
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large']
      }
    },
    color: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: colorOptions
      }
    },
    label: {
      defaultValue: 'Label content',
      control: {
        type: 'text'
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
    indeterminate: {
      control: {
        type: 'boolean'
      }
    },
    className: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta;

/**
 * A story that displays a WithLabel example
 *
 * @param props the story props
 * @param props.label the label property set on controls
 * @param props.size the size property set on controls
 * @param props.color the color property set on controls
 * @param props.indeterminate the indeterminate property set on controls
 * @param props.className the component classes
 */
const WithLabelTemplate: Story = ({ label, size, color, className, indeterminate, ...props }) => {
  useEffect(() => {
    // You can’t make a checkbox indeterminate through HTML.
    // There is no indeterminate attribute.
    // It is a property of checkboxes though, which you can change via JavaScript.
    const checkbox = document.getElementById('checkboxId') as HTMLInputElement | undefined;

    if (checkbox) {
      checkbox.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  return (
    <label className="pui-checkbox-label">
      <input
        {...props}
        id="checkboxId"
        type="checkbox"
        className={[
          `pui-check-radio-${size}`,
          `pui-color-${color}`,
          // Add remaining classes
          ...(className && className.length > 0 ? [className] : [])
        ].join(' ')}
      />
      <span>{label}</span>
    </label>
  );
};

export const WithLabel = WithLabelTemplate.bind({});

export const Indeterminate = WithLabelTemplate.bind({});
Indeterminate.args = {
  indeterminate: true
};

/**
 * A story that displays a NoLabel example
 *
 * @param props the story props
 * @param props.label the label property set on controls
 * @param props.size the size property set on controls
 * @param props.color the color property set on controls
 * @param props.indeterminate the indeterminate property set on controls
 * @param props.className the component classes
 */
const NpLabelTemplate: Story = ({ size, color, className, indeterminate, ...props }) => {
  useEffect(() => {
    // You can’t make a checkbox indeterminate through HTML.
    // There is no indeterminate attribute.
    // It is a property of checkboxes though, which you can change via JavaScript.
    const checkbox = document.getElementById('checkboxId') as HTMLInputElement | undefined;

    if (checkbox) {
      checkbox.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  return (
    <input
      {...props}
      id="checkboxId"
      type="checkbox"
      className={[
        'pui-checkbox',
        `pui-check-radio-${size}`,
        `pui-color-${color}`,
        // Add remaining classes
        ...(className && className.length > 0 ? [className] : [])
      ].join(' ')}
    />
  );
};

export const NoLabel = NpLabelTemplate.bind({});

/**
 * A story that displays a RadioWithLabel example
 *
 * @param props the story props
 * @param props.label the label property set on controls
 * @param props.size the size property set on controls
 * @param props.color the color property set on controls
 * @param props.indeterminate the indeterminate property set on controls
 * @param props.className the component classes
 */
const RadioWithLabelTemplate: Story = ({ label, size, color, className, ...props }) => (
  <div>
    <label className="pui-radio-label">
      <input
        {...props}
        type="radio"
        name="radiotest"
        className={[
          `pui-check-radio-${size}`,
          `pui-color-${color}`,
          // Add remaining classes
          ...(className && className.length > 0 ? [className] : [])
        ].join(' ')}
      />
      <span>{label}</span>
    </label>
    <label className="pui-radio-label">
      <input
        {...props}
        type="radio"
        name="radiotest"
        className={[
          `pui-check-radio-${size}`,
          `pui-color-${color}`,
          // Add remaining classes
          ...(className && className.length > 0 ? [className] : [])
        ].join(' ')}
      />
      <span>{label}</span>
    </label>
  </div>
);

export const RadioWithLabel = RadioWithLabelTemplate.bind({});

/**
 * A story that displays a RadioWithLabel example
 *
 * @param props the story props
 * @param props.label the label property set on controls
 * @param props.size the size property set on controls
 * @param props.color the color property set on controls
 * @param props.indeterminate the indeterminate property set on controls
 * @param props.className the component classes
 */
const RadioNoLabelTemplate: Story = ({ size, color, className, ...props }) => (
  <div>
    <input
      {...props}
      type="radio"
      name="radiotest"
      className={[
        'pui-radio',
        `pui-check-radio-${size}`,
        `pui-color-${color}`,
        // Add remaining classes
        ...(className && className.length > 0 ? [className] : [])
      ].join(' ')}
    />
    <input
      {...props}
      type="radio"
      name="radiotest"
      className={[
        'pui-radio',
        `pui-check-radio-${size}`,
        `pui-color-${color}`,
        // Add remaining classes
        ...(className && className.length > 0 ? [className] : [])
      ].join(' ')}
    />
  </div>
);

export const RadioNoLabel = RadioNoLabelTemplate.bind({});

/**
 * A story that displays a WithRadio example
 *
 * @param props the story props
 * @param props.label the label property set on controls
 * @param props.size the size property set on controls
 * @param props.color the color property set on controls
 * @param props.indeterminate the indeterminate property set on controls
 * @param props.className the component classes
 */
const WithRadioTemplate: Story = ({ label, size, color, className, indeterminate, ...props }) => {
  useEffect(() => {
    // You can’t make a checkbox indeterminate through HTML.
    // There is no indeterminate attribute.
    // It is a property of checkboxes though, which you can change via JavaScript.
    const checkbox = document.getElementById('checkboxId') as HTMLInputElement | undefined;

    if (checkbox) {
      checkbox.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  return (
    <div>
      <label className="pui-checkbox-label">
        <input
          {...props}
          id="checkboxId"
          type="checkbox"
          className={[
            `pui-check-radio-${size}`,
            `pui-color-${color}`,
            // Add remaining classes
            ...(className && className.length > 0 ? [className] : [])
          ].join(' ')}
        />
        <span>{label}</span>
      </label>
      <label className="pui-radio-label">
        <input
          {...props}
          type="radio"
          name="radiotest"
          className={[
            `pui-check-radio-${size}`,
            `pui-color-${color}`,
            // Add remaining classes
            ...(className && className.length > 0 ? [className] : [])
          ].join(' ')}
        />
        <span>{label}</span>
      </label>
      <label className="pui-radio-label">
        <input
          {...props}
          type="radio"
          name="radiotest"
          className={[
            `pui-check-radio-${size}`,
            `pui-color-${color}`,
            // Add remaining classes
            ...(className && className.length > 0 ? [className] : [])
          ].join(' ')}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export const WithRadio = WithRadioTemplate.bind({});
