// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import classnames from 'classnames';
import { gridColumnOptions, gridRowOptions } from '../../prebuiltTailwindTheme';

export default {
  title: 'Components/Grid',
  argTypes: {
    columns: {
      defaultValue: '4',
      control: {
        type: 'select',
        options: gridColumnOptions
      }
    },
    rows: {
      control: {
        type: 'select',
        options: gridRowOptions
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
 * A story that displays a Grid example
 *
 * @param props the story props
 * @param props.columns the columns property set on controls
 * @param props.rows the rows property set on controls
 * @param props.className the component classes
 */
const Template: Story = ({ columns, rows, className }) => (
  <div
    className={classnames(
      'pui-grid',
      {
        [`grid-cols-${columns}`]: !!columns,
        [`grid-rows-${rows}`]: !!rows,
        'grid-flow-col': !!rows
      },
      className
    )}
  >
    {Array(10)
      .fill(null)
      .map((_, i) => (
        <div
          key={i}
          className="bg-blue-500 h-12 pui-border-radius flex items-center justify-center text-white text-2xl font-bold"
        >
          {i + 1}
        </div>
      ))}
  </div>
);

export const Grid = Template.bind({});

export const GridRows = Template.bind({});
GridRows.args = {
  columns: undefined,
  rows: '2'
};
