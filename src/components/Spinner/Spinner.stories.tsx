// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { colorOptions, widthHeightOptions } from '../../prebuiltTailwindTheme';
import classnames from 'classnames';

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
    className={classnames(
      'pui-spinner',
      {
        [`pui-color-${color}`]: color !== 'pui-primary',
        [`w-${size} h-${size}`]: size && size.length > 0 && !size.includes('4')
      },
      className
    )}
  />
);

export const Spinner = SpinnerTemplate.bind({});
