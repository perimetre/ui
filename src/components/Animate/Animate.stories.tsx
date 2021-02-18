// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { classNameTrim } from '../../utils';
import { CrossIcon } from '../Icons';

export default {
  title: 'Components/Animate',
  argTypes: {
    variant: {
      defaultValue: 'fadeIn',
      control: {
        type: 'radio',
        options: ['fadeIn', 'fadeUp', 'fadeDown', 'fadeRight', 'fadeLeft']
      }
    },
    content: {
      defaultValue: 'My animation',
      control: {
        type: 'text'
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
 * A story that displays an animation example
 *
 * @param props the story props
 * @param props.variant the variant property set on controls
 * @param props.content the content property set on co
 * @param props.className the component classes
 */
const Template: Story = ({ variant, content, className, ...props }) => (
  <div {...props} className={classNameTrim(`pui-animate-${variant} ${className || ''}`) || undefined}>
    {content}
  </div>
);

export const fadeIn = Template.bind({});

export const FadeUp = Template.bind({});
FadeUp.args = {
  variant: 'fadeUp'
};

/**
 * A story that displays a ScaleHover example
 *
 * @param props the story props
 * @param props.className the component classes
 */
const ScaleHoverTemplate: Story = ({ className, ...props }) => (
  <div
    {...props}
    className={classNameTrim(`select-none cursor-pointer pui-animate-scaleHover ${className || ''}`) || undefined}
  >
    Please click <span className="inline-block pui-animate-scaleHover-target">here</span>.
  </div>
);

export const ScaleHover = ScaleHoverTemplate.bind({});

/**
 * A story that displays a ScaleHover example
 *
 * @param props the story props
 * @param props.className the component classes
 */
const ScaleHoverIconTemplate: Story = ({ className, ...props }) => (
  <div {...props} className={classNameTrim(`cursor-pointer pui-animate-scaleHover ${className || ''}`) || undefined}>
    <CrossIcon className="pui-animate-scaleHover-target" />
  </div>
);

export const ScaleHoverIcon = ScaleHoverIconTemplate.bind({});
