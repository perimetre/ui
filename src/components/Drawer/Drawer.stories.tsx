import React, { useCallback, useEffect, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Drawer, DrawerProps } from '.';
import { MenuIcon } from '../Icons';

export default {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    content: {
      control: {
        type: 'text'
      }
    },
    onOpenCallback: { action: 'onOpen' },
    onBack: { action: 'onBack' }
  },
  args: {
    content: 'Drawer content'
  }
} as Meta;

/**
 * A story that displays a drawer example
 * @param props the story props
 * @param props.content The content property set on controls
 * @param props.onOpenCallback Callback to update the open state
 * @param props.isOpen Whether or not the drawer should be open
 */
const Template: StoryFn<DrawerProps & { content?: string; onOpenCallback: (isOpen: boolean) => void }> = ({
  content,
  onOpenCallback,
  isOpen: isOpenProps,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(isOpenProps);

  useEffect(() => setIsOpen(isOpenProps), [isOpenProps]);

  const onOpen = useCallback(
    (isOpen: boolean) => {
      onOpenCallback(isOpen);
      setIsOpen(isOpen);
    },
    [onOpenCallback]
  );

  return (
    <div>
      <button className="pui-btn-icon text-pui-primary p-4" onClick={() => onOpen(!isOpen)}>
        {/* Adds a close icon */}
        <MenuIcon className="pui-animate-scaleHover-target" />
      </button>
      <Drawer {...props} isOpen={isOpen} onOpen={onOpen}>
        <div className="p-4 pt-0">{content}</div>
      </Drawer>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  onBack: undefined
};

export const WithBack = Template.bind({});
