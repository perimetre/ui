import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { colorOptions, widthHeightOptions } from '../../prebuiltTailwindTheme';
import * as IconComponents from '.';
import classnames from 'classnames';
import { textColorClassnameMap, widthClassnameMap, heightClassnameMap } from '../../storybookMappers';

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
 * @param props.color the color property set on controls
 * @param props.className the component classes
 */
const Template: StoryFn = ({ icon, size, color, className, ...props }) => {
  const CurrentIcon = IconComponents[icon];
  return (
    <CurrentIcon
      {...props}
      className={classnames(
        {
          [textColorClassnameMap[color || 'transparent']]: color && color.length > 0,
          [`${widthClassnameMap[size || 'auto']} ${heightClassnameMap[size || 'auto']}`]: size && size.length > 0
        },
        className
      )}
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
 * @param props.color the color property set on controls
 * @param props.className the component classes
 */
const ButtonTemplate: StoryFn = ({ icon, size, color, className, ...props }) => {
  const CurrentIcon = IconComponents[icon];
  return (
    <button type="button" className="pui-btn-icon">
      <CurrentIcon
        {...props}
        className={classnames(
          'pui-animate-scaleHover-target',
          {
            [textColorClassnameMap[color || 'transparent']]: color && color.length > 0,
            [`${widthClassnameMap[size || 'auto']} ${heightClassnameMap[size || 'auto']}`]: size && size.length > 0
          },
          className
        )}
      />
    </button>
  );
};

export const Button = ButtonTemplate.bind({});
