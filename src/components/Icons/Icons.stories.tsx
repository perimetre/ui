// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { colorOptions, widthHeightOptions } from '../../prebuiltTailwindTheme';
import * as IconComponents from '.';
import { classNameTrim } from '../../utils';

const iconOptions = Object.entries(IconComponents)
  .map((x) => x[0])
  .filter((x) => !x.includes('URL'));

export default {
  title: 'Components/Icons',
  argTypes: {
    icon: {
      defaultValue: iconOptions[0],
      control: {
        type: 'select',
        options: iconOptions
      }
    },
    size: {
      control: {
        type: 'select',
        options: widthHeightOptions
      }
    },
    type: {
      defaultValue: 'fill',
      control: {
        type: 'radio',
        options: ['stroke', 'fill']
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
 * A story that displays an icon example
 *
 * @param props the story props
 * @param props.icon the icon property set on controls
 * @param props.size the size property set on controls
 * @param props.type the type property set on controls
 * @param props.color the color property set on controls
 * @param props.className the component classes
 */
const Template: Story = ({ icon, size, type, color, className, ...props }) => {
  const CurrentIcon = IconComponents[icon];
  return (
    <CurrentIcon
      {...props}
      className={
        classNameTrim(
          `${type && type.length > 0 ? (type.includes('stroke') ? 'stroke-current' : 'fill-current') : ''} ${
            color && color.length > 0 ? `text-${color}` : ''
          } ${size && size.length > 0 ? `w-${size} h-${size}` : ''} ${className || ''}`
        ) || undefined
      }
    />
  );
};

export const Icons = Template.bind({});

/**
 * A story that displays an buttonicon example
 *
 * @param props the story props
 * @param props.icon the icon property set on controls
 * @param props.size the size property set on controls
 * @param props.type the type property set on controls
 * @param props.color the color property set on controls
 * @param props.className the component classes
 */
const ButtonTemplate: Story = ({ icon, size, type, color, className, ...props }) => {
  const CurrentIcon = IconComponents[icon];
  return (
    <button type="button" className="pui-btn-icon">
      <CurrentIcon
        {...props}
        className={
          classNameTrim(
            `pui-animate-scaleHover-target ${
              type && type.length > 0 ? (type.includes('stroke') ? 'stroke-current' : 'fill-current') : ''
            } ${color && color.length > 0 ? `text-${color}` : ''} ${
              size && size.length > 0 ? `w-${size} h-${size}` : ''
            } ${className || ''}`
          ) || undefined
        }
      />
    </button>
  );
};

export const Button = ButtonTemplate.bind({});
