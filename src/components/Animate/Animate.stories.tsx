import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import classnames from 'classnames';
import { CrossIcon } from '../Icons';
import { puiAnimateClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/Animate',
  argTypes: {
    variant: {
      options: Object.entries(puiAnimateClassnameMap).map((x) => x[0]),
      control: {
        type: 'radio'
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
    }
  },
  args: {
    variant: 'fadeIn',
    content: 'My animation'
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
const Template: StoryFn = ({ variant, content, className, ...props }) => (
  <div {...props} className={classnames(puiAnimateClassnameMap[variant], className)}>
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
const ScaleHoverTemplate: StoryFn = ({ className, ...props }) => (
  <div {...props} className={classnames('select-none cursor-pointer pui-animate-scaleHover', className)}>
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
const ScaleHoverIconTemplate: StoryFn = ({ className, ...props }) => (
  <div {...props} className={classnames('cursor-pointer pui-animate-scaleHover', className)}>
    <CrossIcon className="pui-animate-scaleHover-target" />
  </div>
);

export const ScaleHoverIcon = ScaleHoverIconTemplate.bind({});
