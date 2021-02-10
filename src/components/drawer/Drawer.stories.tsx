import React, { useCallback, useEffect, useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Drawer } from '.';
import { MenuIcon } from '../icons';

export default {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    content: {
      defaultValue: 'Drawer content',
      control: {
        type: 'text'
      }
    },
    onOpenCallback: { action: 'onOpen' },
    onBack: { action: 'onBack' }
  }
} as Meta;

/**
 * A story that displays a drawer example
 *
 * @param props the story props
 * @param props.content The content property set on controls
 * @param props.onOpenCallback Callback to update the open state
 * @param props.isOpen Whether or not the drawer should be open
 */
const Template: Story = ({ content, onOpenCallback, isOpen: isOpenProps, ...props }) => {
  const [isOpen, setIsOpen] = useState(isOpenProps);

  useEffect(() => setIsOpen(isOpenProps), [isOpenProps]);

  const onOpen = useCallback(
    (isOpen?: boolean) => {
      onOpenCallback(isOpen);
      setIsOpen(isOpen);
    },
    [onOpenCallback]
  );

  return (
    <div>
      <button className="pui-btn-icon text-pui-primary" onClick={() => onOpen(!isOpen)}>
        {/* Adds a close icon */}
        <MenuIcon className="pui-animate-scaleHover-target fill-current" />
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
