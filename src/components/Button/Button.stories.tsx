import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { borderStyleOptions, colorOptions } from '../../prebuiltTailwindTheme';
import { Button, ButtonProps } from '.';
import classnames from 'classnames';
import { BellIcon, MenuIcon } from '../Icons';
import { puiColorClassnameMap, borderStyleClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/Buttons/Default',
  component: Button,
  argTypes: {
    border: {
      options: borderStyleOptions,
      control: {
        type: 'check'
      }
    },
    color: {
      options: colorOptions,
      control: {
        type: 'select'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    content: {
      control: {
        type: 'text'
      }
    },
    className: {
      control: {
        type: 'text'
      }
    },
    onClick: { action: 'onClick' }
  },
  args: {
    color: 'pui-primary',
    disabled: false,
    content: 'Button'
  }
} as Meta;

type StoryFnProps = ButtonProps & {
  border?: keyof typeof borderStyleClassnameMap;
  color?: keyof typeof puiColorClassnameMap;
  content?: string;
};

/**
 * A story that displays a button example
 * @param props the story props
 * @param props.border the border property set on controls
 * @param props.color the color property set on controls
 * @param props.content the content property set on controls
 * @param props.className the component classes
 * @param props.ref grab the ref to fix the issue with forwardRef typing
 */
const Template: StoryFn<StoryFnProps> = ({
  border,
  color,
  content,
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref,
  ...props
}) => (
  <Button
    {...props}
    className={classnames(
      {
        [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary',
        [borderStyleClassnameMap[border || 'none']]: border && border.length > 0
      },
      className
    )}
  >
    {content}
  </Button>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'pui-secondary'
};

export const BorderedPrimary = Template.bind({});
BorderedPrimary.args = {
  variant: 'bordered'
};

export const BorderedSecondary = Template.bind({});
BorderedSecondary.args = {
  variant: 'bordered',
  color: 'pui-secondary'
};

export const Dashed = Template.bind({});
Dashed.args = {
  variant: 'bordered',
  border: 'dashed'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

export const Chip = Template.bind({});
Chip.args = {
  isChip: true
};

/**
 * A story that displays a button example
 * @param props the story props
 * @param props.border the border property set on controls
 * @param props.color the color property set on controls
 * @param props.content the content property set on controls
 * @param props.className the component classes
 * @param props.ref grab the ref to fix the issue with forwardRef typing
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SpinnerTemplate: StoryFn<StoryFnProps> = ({ border, color, content, className, ref, ...props }) => (
  <Button
    {...props}
    className={classnames(
      'flex items-center',
      {
        [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary',
        [borderStyleClassnameMap[border || 'none']]: border && border.length > 0
      },
      className
    )}
  >
    {content}
    <span className="pui-spinner pui-color-pui-paragraph-0 ml-2" />
  </Button>
);

export const WithSpinner = SpinnerTemplate.bind({});

/**
 * A story that displays a button example
 * @param props the story props
 * @param props.border the border property set on controls
 * @param props.color the color property set on controls
 * @param props.content the content property set on controls
 * @param props.className the component classes
 * @param props.ref grab the ref to fix the issue with forwardRef typing
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const WithIconTemplate: StoryFn<StoryFnProps> = ({ border, color, content, className, ref, ...props }) => (
  <Button
    {...props}
    className={classnames(
      'flex items-center',
      {
        [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary',
        [borderStyleClassnameMap[border || 'none']]: border && border.length > 0
      },
      className
    )}
  >
    {content}
    <BellIcon className="pui-color-pui-paragraph-0 ml-2 h-4 w-4" />
  </Button>
);

export const WithIcon = WithIconTemplate.bind({});

/**
 * A story that displays an icon button example
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.className the component classes
 * @param props.ref grab the ref to fix the issue with forwardRef typing
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const IconButtonTemplate: StoryFn<StoryFnProps> = ({ color, className, ref, ...props }) => (
  <Button
    {...props}
    className={classnames(
      {
        [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary'
      },
      className
    )}
  >
    <MenuIcon className="pui-animate-scaleHover-target" />
  </Button>
);

export const IconButton = IconButtonTemplate.bind({});
IconButton.args = {
  variant: 'icon'
};
