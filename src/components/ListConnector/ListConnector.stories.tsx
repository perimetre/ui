import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { colorOptions } from '../../prebuiltTailwindTheme';
import classnames from 'classnames';
import { puiColorClassnameMap } from '../../storybookMappers';
import { ListConnector, ListConnectorProps } from '.';

export default {
  title: 'Components/ListConnector',
  argTypes: {
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
 * A story that displays a list connector
 *
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.className the classes for element
 */
const Template: StoryFn<ListConnectorProps & { color?: string } & { className?: string }> = ({
  color,
  className,
  ...props
}) => (
  <div
    className={classnames(
      'flex align-middle w-full',
      { [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary' },
      className
    )}
  >
    <ListConnector {...props} />
    <div className="shadow-md w-full h-56 my-6"></div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  showIcon: true
};

export const FlatTop = Template.bind({});
FlatTop.args = {
  borders: 'flatTop',
  showIcon: true
};

export const FlatBottom = Template.bind({});
FlatBottom.args = {
  borders: 'flatBottom',
  showIcon: true
};

export const noRounded = Template.bind({});
noRounded.args = {
  borders: 'noRounded',
  showIcon: true
};
