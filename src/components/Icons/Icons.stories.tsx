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
      options: iconOptions,
      control: {
        type: 'select'
      }
    },
    size: {
      options: widthHeightOptions,
      control: {
        type: 'select'
      }
    },
    color: {
      options: colorOptions,
      control: {
        type: 'select'
      }
    },
    className: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    icon: iconOptions[0],
    color: 'pui-primary'
  }
} as Meta;

type StoryFnProps = Record<string, unknown> & {
  icon: keyof typeof IconComponents;
  size?: keyof typeof widthClassnameMap;
  color?: keyof typeof textColorClassnameMap;
  className?: string;
};

/**
 * A story that displays an icon example
 * @param props the story props
 * @param props.icon the icon property set on controls
 * @param props.size the size property set on controls
 * @param props.color the color property set on controls
 * @param props.className the component classes
 */
const Template: StoryFn<StoryFnProps> = ({ icon, size, color, className, ...props }) => {
  const CurrentIcon = IconComponents[icon] as React.FC<{ className?: string }>;
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
 * @param props the story props
 * @param props.icon the icon property set on controls
 * @param props.size the size property set on controls
 * @param props.color the color property set on controls
 * @param props.className the component classes
 */
const ButtonTemplate: StoryFn<StoryFnProps> = ({ icon, size, color, className, ...props }) => {
  const CurrentIcon = IconComponents[icon] as React.FC<{ className?: string }>;
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
