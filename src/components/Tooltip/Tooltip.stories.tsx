import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Tooltip, TooltipProps } from '.';
import classnames from 'classnames';
import { AngleDownIcon } from '../Icons';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    placement: {
      defaultValue: 'top',
      control: {
        type: 'select',
        options: [
          'top',
          'top-start',
          'top-end',
          'right',
          'right-start',
          'right-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'left',
          'left-start',
          'left-end',
          'auto',
          'auto-start',
          'auto-end'
        ]
      }
    },
    trigger: {
      defaultValue: 'mouseenter focus',
      control: {
        type: 'select',
        options: ['mouseenter focus', 'click', 'focusin', 'mouseenter click']
      }
    },
    hideOnClick: {
      control: {
        type: 'boolean'
      }
    },
    interactive: {
      control: {
        type: 'boolean'
      }
    },
    text: {
      defaultValue: 'Open',
      control: {
        type: 'text'
      }
    },
    content: {
      defaultValue: 'Tooltip!',
      control: {
        type: 'text'
      }
    }
  }
} as Meta;

/**
 * A story that displays a tooltip example
 *
 * @param props the story props
 * @param props.text the text property set on controls
 * @param props.content the content property set on controls
 * @param props.text.viewMode The storybook's viewmode
 */
const Template: StoryFn<TooltipProps & { text?: string; content?: string }> = (
  { text, content, ...props },
  { viewMode }
) => (
  <div className={classnames('flex items-center justify-center w-full', { 'h-5/12vh': viewMode !== 'docs' })}>
    <Tooltip {...props} content={<div className="max-w-sm">{content}</div>}>
      <>
        <span>{text}</span>
        <AngleDownIcon className="pui-animate-scaleHover-target ml-2" />
      </>
    </Tooltip>
  </div>
);

export const OnHover = Template.bind({});

export const Interactive = Template.bind({});
Interactive.args = {
  interactive: true
};

export const OnClick = Template.bind({});
OnClick.args = {
  trigger: 'click',
  hideOnClick: true
};

export const NoArrow = Template.bind({});
NoArrow.args = {
  arrow: false
};

export const Long = Template.bind({});
Long.args = {
  placement: 'bottom-end',
  content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reprehenderit necessitatibus pariatur asperiores quos! Accusantium sapiente velit porro vero modi quae ullam unde? Tempora reprehenderit tenetur, quae delectus quidem incidunt.`
};
