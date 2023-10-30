import { Meta, StoryFn } from '@storybook/react';
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
      control: {
        type: 'text'
      }
    },
    placeholder: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    label: 'Input',
    placeholder: 'Type here...'
  }
} as Meta;

/**
 * A story that displays a dropdown input example
 *
 * @param props the story props
 * @param props.label the label property set on controls
 * @param props.open the open property set on controls
 */
const Template: StoryFn = ({ label, open, ...props }) => (
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
