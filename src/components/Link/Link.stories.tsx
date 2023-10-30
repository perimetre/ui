/* eslint-disable jsx-a11y/anchor-is-valid */
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { colorOptions } from '../../prebuiltTailwindTheme';
import classnames from 'classnames';
import { puiColorClassnameMap } from '../../storybookMappers';

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
const LinkTemplate: StoryFn = ({ color, className }) => (
  <div>
    Please click{' '}
    <a
      href="#"
      className={classnames(
        'pui-link',
        { [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary' },
        className
      )}
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
const VisitedLinkTemplate: StoryFn = ({ color, className }) => (
  <div>
    Please click{' '}
    <a
      href=""
      className={classnames(
        'pui-link',
        { [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary' },
        className
      )}
    >
      here
    </a>{' '}
    to visit.
  </div>
);

export const VisitedLink = VisitedLinkTemplate.bind({});
