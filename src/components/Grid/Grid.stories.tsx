import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import classnames from 'classnames';
import { gridColumnOptions, gridRowOptions } from '../../prebuiltTailwindTheme';
import { gridColsClassnameMap, gridRowsClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/Grid',
  argTypes: {
    columns: {
      options: gridColumnOptions,
      control: {
        type: 'select'
      }
    },
    rows: {
      options: gridRowOptions,
      control: {
        type: 'select'
      }
    },
    className: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    columns: '4',
    rows: undefined
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
const Template: StoryFn = ({ columns, rows, className }) => (
  <div
    className={classnames(
      'pui-grid',
      {
        [gridColsClassnameMap[columns || 'none']]: !!columns,
        [gridRowsClassnameMap[rows || 'none']]: !!rows,
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
