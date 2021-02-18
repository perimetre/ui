import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { borderStyleOptions, colorOptions } from '../../prebuiltTailwindTheme';
import { Button, ButtonProps } from '.';
import { classNameTrim } from '../../utils';
import { BellIcon, MenuIcon } from '../Icons';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    border: {
      control: {
        type: 'check',
        options: borderStyleOptions
      }
    },
    color: {
      defaultValue: 'pui-primary',
      control: {
        type: 'select',
        options: colorOptions
      }
    },
    disabled: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
    content: {
      defaultValue: 'Button',
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
  }
} as Meta;

/**
 * A story that displays a button example
 *
 * @param props the story props
 * @param props.border the border property set on controls
 * @param props.color the color property set on controls
 * @param props.content the content property set on controls
 * @param props.className the component classes
 */
const Template: Story<ButtonProps & { border?: string; content?: string }> = ({
  border,
  color,
  content,
  className,
  ...props
}) => (
  <Button
    {...props}
    className={
      classNameTrim(
        `${color !== 'pui-primary' ? `pui-color-${color}` : ''} ${
          border && border.length > 0 ? `border-${border}` : ''
        } ${className || ''}`
      ) || undefined
    }
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
 *
 * @param props the story props
 * @param props.border the border property set on controls
 * @param props.color the color property set on controls
 * @param props.content the content property set on controls
 * @param props.className the component classes
 */
const SpinnerTemplate: Story = ({ border, color, content, className, ...props }) => (
  <Button
    {...props}
    className={
      classNameTrim(
        `flex items-center ${color !== 'pui-primary' ? `pui-color-${color}` : ''} ${
          border && border.length > 0 ? `border-${border}` : ''
        } ${className || ''}`
      ) || undefined
    }
  >
    {content}
    <span className="pui-spinner pui-color-pui-paragraph-0 ml-2" />
  </Button>
);

export const WithSpinner = SpinnerTemplate.bind({});

/**
 * A story that displays a button example
 *
 * @param props the story props
 * @param props.border the border property set on controls
 * @param props.color the color property set on controls
 * @param props.content the content property set on controls
 * @param props.className the component classes
 */
const WithIconTemplate: Story = ({ border, color, content, className, ...props }) => (
  <Button
    {...props}
    className={
      classNameTrim(
        `flex items-center ${color !== 'pui-primary' ? `pui-color-${color}` : ''} ${
          border && border.length > 0 ? `border-${border}` : ''
        } ${className || ''}`
      ) || undefined
    }
  >
    {content}
    <BellIcon className="pui-color-pui-paragraph-0 ml-2 h-4 w-4" />
  </Button>
);

export const WithIcon = WithIconTemplate.bind({});

/**
 * A story that displays an icon button example
 *
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.className the component classes
 */
const IconButtonTemplate: Story = ({ color, className, ...props }) => (
  <Button
    {...props}
    className={classNameTrim(`${color !== 'pui-primary' ? `pui-color-${color}` : ''} ${className || ''}`) || undefined}
  >
    <MenuIcon className="pui-animate-scaleHover-target" />
  </Button>
);

export const IconButton = IconButtonTemplate.bind({});
IconButton.args = {
  variant: 'icon'
};
