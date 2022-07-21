// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import classnames from 'classnames';
import React from 'react';
import { HorizontalResizeablePanel } from '.';
import { colorOptions, widthHeightOptions } from '../../prebuiltTailwindTheme';
import { backgroundColorClassnameMap, heightClassnameMap, widthClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/HorizontalResizeablePanel',
  component: HorizontalResizeablePanel,
  argTypes: {
    resizeRight: {
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
      defaultValue: 'screen',
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
const Template: Story = ({ width, height, backgroundColor, className, ...props }) => {
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
