// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

export default {
  title: 'Components/Animate',
  argTypes: {
    variant: {
      defaultValue: 'fadeIn',
      control: {
        type: 'radio',
        options: ['fadeIn', 'fadeUp', 'fadeDown']
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
  <div
    {...props}
    className={[
      `pui-animate-${variant}`,
      // Add remaining classes
      ...(className && className.length > 0 ? [className] : [])
    ].join(' ')}
  >
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
    className={[
      `select-none`,
      `cursor-pointer`,
      `pui-animate-scaleHover`,
      // Add remaining classes
      ...(className && className.length > 0 ? [className] : [])
    ].join(' ')}
  >
    Please click <span className="inline-block pui-animate-scaleHover-target">here</span>.
  </div>
);

// TODO: update scaleHover with icon

export const ScaleHover = ScaleHoverTemplate.bind({});
