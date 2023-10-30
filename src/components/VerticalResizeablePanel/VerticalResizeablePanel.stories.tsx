import { Meta, StoryFn } from '@storybook/react';
import classnames from 'classnames';
import React from 'react';
import { VerticalResizeablePanel } from '.';
import { colorOptions, widthHeightOptions } from '../../prebuiltTailwindTheme';
import { backgroundColorClassnameMap, heightClassnameMap, widthClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/ResizeablePanel/Vertical',
  component: VerticalResizeablePanel,
  argTypes: {
    resizeBottom: {
      defaultValue: true
    },
    width: {
      defaultValue: '1/4',
      control: {
        type: 'select',
        options: widthHeightOptions
      }
    },
    height: {
      defaultValue: '1/2',
      control: {
        type: 'select',
        options: widthHeightOptions
      }
    },
    backgroundColor: {
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
    },
    onResize: { action: 'onResize' },
    onResizeChange: { action: 'onResizeChange' }
  }
} as Meta;

/**
 * A story that displays a horizontal resizeable example
 *
 * @param props The story props
 * @param props.width The example width size
 * @param props.height The example height size
 * @param props.backgroundColor the example background color
 * @param props.className the classname to pass down if any
 */
const Template: StoryFn = ({ width, height, backgroundColor, className, ...props }) => {
  return (
    <div>
      <VerticalResizeablePanel
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
      </VerticalResizeablePanel>
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
    <div className="w-full h-[2px] bg-transparent transition-colors duration-100 group-hover:bg-pui-secondary" />
  )
};
