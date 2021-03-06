// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { marginPaddingOptions } from '../../prebuiltTailwindTheme';
import classnames from 'classnames';
import { puiGapClassnameMap, puiGapXClassnameMap, puiGapYClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/Gap',
  argTypes: {
    size: {
      defaultValue: '2',
      control: {
        type: 'select',
        options: marginPaddingOptions
      }
    },
    horizontal: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
    vertical: {
      defaultValue: false,
      control: {
        type: 'boolean'
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
 * A story that displays a gap example
 *
 * @param props the story props
 * @param props.size the size property set on controls
 * @param props.horizontal the horizontal property set on controls
 * @param props.vertical the vertical property set on controls
 * @param props.className the component classes
 */
const Template: Story = ({ size, horizontal, vertical, className, ...props }) => (
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
