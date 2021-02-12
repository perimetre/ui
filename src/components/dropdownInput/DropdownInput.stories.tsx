// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

export default {
  title: 'Components/Inputs/Dropdown',
  argTypes: {
    open: {
      control: {
        type: 'boolean'
      }
    },
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
    }
  }
} as Meta;

/**
 * A story that displays a dropdown input example
 *
 * @param props the story props
 * @param props.label the label property set on controls
 * @param props.open the open property set on controls
 */
const Template: Story = ({ label, open, ...props }) => (
  <div>
    <label className="pui-label-input" htmlFor="input">
      {label}
    </label>
    <div className={`pui-dropdown-input-container ${open ? 'open' : ''}`}>
      <input {...props} id="input" className="pui-text-input" readOnly />
      {open && (
        <ul className="pui-dropdown-input-options">
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <li key={i} className="pui-dropdown-input-item">
                Option {i + 1}
              </li>
            ))}
        </ul>
      )}
    </div>
    <ul className="pui-dropdown-input-selected-options">
      {Array(10)
        .fill(null)
        .map((_, i) => (
          <li key={i} className="pui-dropdown-input-selected-item">
            Selected {i + 1}
          </li>
        ))}
    </ul>
  </div>
);

export const Dropdown = Template.bind({});
