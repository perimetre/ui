import React, { useCallback, useEffect, useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Drawer } from '.';

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
    onOpenCallback: { action: 'onOpen' }
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
      <button type="button" className="pui-btn-default m-4" onClick={() => onOpen(!isOpen)}>
        Open
      </button>
      <Drawer {...props} isOpen={isOpen} onOpen={onOpen}>
        {content}
      </Drawer>
    </div>
  );
};

export const DrawerMenu = Template.bind({});
