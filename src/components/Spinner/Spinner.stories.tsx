import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { colorOptions, widthHeightOptions } from '../../prebuiltTailwindTheme';
import classnames from 'classnames';
import { heightClassnameMap, puiColorClassnameMap, widthClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/Loaders/Spinner',
  argTypes: {
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
    size: '4',
    color: 'pui-primary'
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
const SpinnerTemplate: StoryFn = ({ size, color, className }) => (
  <span
    className={classnames(
      'pui-spinner',
      {
        [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary',
        [`${widthClassnameMap[size || 'auto']} ${heightClassnameMap[size || 'auto']}`]:
          size && size.length > 0 && !size.includes('4')
      },
      className
    )}
  />
);

export const Spinner = SpinnerTemplate.bind({});
