// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { widthHeightOptions } from '../../prebuiltTailwindTheme';
import classnames from 'classnames';
import { heightClassnameMap, widthClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/Skeleton',
  argTypes: {
    width: {
      defaultValue: '3/4',
      control: {
        type: 'select',
        options: widthHeightOptions
      }
    },
    height: {
      defaultValue: '4',
      control: {
        type: 'select',
        options: widthHeightOptions
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
 * A story that displays a Skeleton example
 *
 * @param props the story props
 * @param props.width the width property set on controls
 * @param props.height the height property set on controls
 * @param props.className the component classes
 */
const SkeletonTemplate: Story = ({ width, height, className }) => (
  <div
    className={classnames(
      'pui-skeleton',
      {
        [heightClassnameMap[height || 'auto']]: height && height.length > 0,
        [widthClassnameMap[width || 'auto']]: width && width.length > 0
      },
      className
    )}
  ></div>
);

export const Skeleton = SkeletonTemplate.bind({});

/**
 * A story that displays a MultiSkeleton example
 *
 * @param props the story props
 */
const MultiSkeletonTemplate: Story = ({}) => (
  // creates a bordered "card" effect
  <div className="border border-gray-200 shadow pui-border-radius p-4 max-w-sm w-full mx-auto">
    {/* Makes a horizontal flex */}
    <div className="flex space-x-4">
      {/* An "avatar" skeleton */}
      <div className="pui-skeleton rounded-full h-12 w-12"></div>
      {/* Makes a vorizontal flex */}
      <div className="flex-1 space-y-4 py-1">
        {/* A "title" skeleton */}
        <div className="pui-skeleton h-4 w-3/4"></div>
        {/* Adds spacing between */}
        <div className="space-y-2">
          {/* A "text" skeleton */}
          <div className="pui-skeleton h-4 bg-light-blue-400 rounded"></div>
          <div className="pui-skeleton h-4 w-5/6"></div>
        </div>
      </div>
    </div>
  </div>
);

export const MultiSkeleton = MultiSkeletonTemplate.bind({});
