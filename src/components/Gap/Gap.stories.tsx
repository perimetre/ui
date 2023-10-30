import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { marginPaddingOptions } from '../../prebuiltTailwindTheme';
import classnames from 'classnames';
import { puiGapClassnameMap, puiGapXClassnameMap, puiGapYClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/Gap',
  argTypes: {
    size: {
      options: marginPaddingOptions,
      control: {
        type: 'select'
      }
    },
    horizontal: {
      control: {
        type: 'boolean'
      }
    },
    vertical: {
      control: {
        type: 'boolean'
      }
    },
    className: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    size: '2',
    horizontal: false,
    vertical: false
  }
} as Meta;

/**
 * A story that displays a gap example
 *
 * @param props the story props
 * @param props.size the size property set on controls
 * @param props.horizontal the horizontal property set on controls
 * @param props.vertical the vertical property set on controls
 * @param props.className the component classes
 */
const Template: StoryFn = ({ size, horizontal, vertical, className, ...props }) => (
  <div>
    <div
      {...props}
      className={classnames(
        {
          [puiGapClassnameMap[size || 'auto']]: !horizontal && !vertical,
          [puiGapXClassnameMap[size || 'auto']]: horizontal,
          [puiGapYClassnameMap[size || 'auto']]: vertical
        },
        className
      )}
    >
      {Array(30)
        .fill(null)
        .map((_, i) => (
          <span key={i} className="pui-chip-default">
            Item {i + 1}
          </span>
        ))}
    </div>
    <p className="text-pui-paragraph-500">
      * It is recommended to use{' '}
      <a className="pui-link" href="https://tailwindcss.com/docs/space" target="_blank" rel="noreferrer">
        tailwind space between(only works with flex)
      </a>{' '}
      or{' '}
      <a className="pui-link" href="https://tailwindcss.com/docs/gap" target="_blank" rel="noreferrer">
        gap(only works with grid)
      </a>{' '}
      whenever possible. This approach works regardless of flex/grid and can be used if those others don&lsquo;t apply.
    </p>
  </div>
);

export const Gap = Template.bind({});
