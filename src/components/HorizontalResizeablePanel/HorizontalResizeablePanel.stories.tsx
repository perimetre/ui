import { Meta, StoryFn } from '@storybook/react';
import classnames from 'classnames';
import React from 'react';
import { HorizontalResizeablePanel } from '.';
import { colorOptions, widthHeightOptions } from '../../prebuiltTailwindTheme';
import { backgroundColorClassnameMap, heightClassnameMap, widthClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/ResizeablePanel/Horizontal',
  component: HorizontalResizeablePanel,
  argTypes: {
    width: {
      options: widthHeightOptions,
      control: {
        type: 'select'
      }
    },
    height: {
      options: widthHeightOptions,
      control: {
        type: 'select'
      }
    },
    backgroundColor: {
      options: colorOptions,
      control: {
        type: 'select'
      }
    },
    className: {
      control: {
        type: 'text'
      }
    },
    onResize: { action: 'onResize' },
    onResizeChange: { action: 'onResizeChange' }
  },
  args: {
    resizeRight: true,
    width: '1/4',
    height: 'screen',
    backgroundColor: 'pui-primary'
  }
} as Meta;

/**
 * A story that displays a horizontal resizeable example
 * @param props The story props
 * @param props.width The example width size
 * @param props.height The example height size
 * @param props.backgroundColor the example background color
 * @param props.className the classname to pass down if any
 */
const Template: StoryFn<
  Record<string, unknown> & {
    width: keyof typeof widthClassnameMap;
    height: keyof typeof heightClassnameMap;
    backgroundColor: keyof typeof backgroundColorClassnameMap;
    className?: string;
  }
> = ({ width, height, backgroundColor, className, ...props }) => {
  return (
    <div>
      <HorizontalResizeablePanel
        {...props}
        className={classnames(
          backgroundColorClassnameMap[backgroundColor || 'transparent'],
          {
            [heightClassnameMap[height || 'auto']]: height && height.length > 0,
            [widthClassnameMap[width || 'auto']]: width && width.length > 0
          },
          className
        )}
      >
        {({ isResizing }) => <span>isResizing: {`${isResizing}`}</span>}
      </HorizontalResizeablePanel>
    </div>
  );
};

export const Default = Template.bind({});

export const RenderDragContent = Template.bind({});
RenderDragContent.args = {
  /**
   * Renders content inside the drag area
   */
  renderDragContent: () => (
    <div className="h-full w-[2px] bg-transparent transition-colors duration-100 group-hover:bg-pui-secondary" />
  )
};
