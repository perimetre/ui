/* eslint-disable jsx-a11y/anchor-is-valid */
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { colorOptions } from '../../prebuiltTailwindTheme';
import { classNameTrim } from '../../utils';

export default {
  title: 'Components/Link',
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
 * A story that displays a Spinner example
 *
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.className the component classes
 */
const LinkTemplate: Story = ({ color, className }) => (
  <div>
    Please click{' '}
    <a
      href="#"
      className={
        classNameTrim(`pui-link ${color !== 'pui-primary' ? `pui-color-${color}` : ''} ${className || ''}`) || undefined
      }
    >
      here
    </a>{' '}
    to visit.
  </div>
);

export const Link = LinkTemplate.bind({});

/**
 * A story that displays a Spinner example
 *
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.className the component classes
 */
const VisitedLinkTemplate: Story = ({ color, className }) => (
  <div>
    Please click{' '}
    <a
      href=""
      className={
        classNameTrim(`pui-link ${color !== 'pui-primary' ? `pui-color-${color}` : ''} ${className || ''}`) || undefined
      }
    >
      here
    </a>{' '}
    to visit.
  </div>
);

export const VisitedLink = VisitedLinkTemplate.bind({});
