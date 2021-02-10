// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { colorOptions, widthHeightOptions } from '../../prebuiltTailwindTheme';

export default {
  title: 'Components/Spinner',
  argTypes: {
    size: {
      defaultValue: '4',
      control: {
        type: 'select',
        options: widthHeightOptions
      }
    },
    color: {
      defaultValue: 'pui-primary',
      control: {
        type: 'select',
        options: colorOptions
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
 * A story that displays a Spinner example
 *
 * @param props the story props
 * @param props.size the size property set on controls
 * @param props.color the color property set on controls
 * @param props.className the component classes
 */
const SpinnerTemplate: Story = ({ size, color, className }) => (
  <span
    className={[
      'pui-spinner',
      ...(color && color.length > 0 && !color.includes('pui-primary') ? [`pui-color-${color}`] : []),
      // If the scale property is set
      ...(size && size.length > 0 && !size.includes('4') ? [`w-${size}`, `h-${size}`] : []),
      // Add remaining classes
      ...(className && className.length > 0 ? [className] : [])
    ].join(' ')}
  />
);

export const Spinner = SpinnerTemplate.bind({});
