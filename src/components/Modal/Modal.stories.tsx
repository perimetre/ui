// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useCallback, useEffect, useState } from 'react';
import { Modal, ModalProps } from '.';
import { minWidthOptions } from '../../prebuiltTailwindTheme';
import { classNameTrim } from '../../utils';
import { MenuIcon } from '../Icons';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    isOpen: {
      defaultValue: true
    },
    title: {
      defaultValue: 'This is my modal'
    },
    size: {
      defaultValue: '1/3vw',
      control: {
        type: 'select',
        options: minWidthOptions
      }
    },
    content: {
      defaultValue: 'A modal content',
      control: {
        type: 'text'
      }
    },
    onToggleCallback: { action: 'onToggle' }
  }
} as Meta;

/**
 * A story that displays a modal example
 *
 * @param props the story props
 * @param props.content The content property set on controls
 * @param props.onToggle Callback to update the open state
 * @param props.isOpen Whether or not the drawer should be open
 * @param props.onToggleCallback to update the open state
 * @param props.size The size property set on controls
 */
const Template: Story<ModalProps & { content?: string; onToggleCallback: () => void; size?: string }> = ({
  content,
  isOpen: isOpenProps,
  onToggleCallback,
  size,
  ...props
}) => {
  // If the viewmode is "docs", don't start it opened
  const [isOpen, setIsOpen] = useState(window?.location?.search.indexOf('viewMode=docs') !== -1 ? false : isOpenProps);

  useEffect(() => setIsOpen(isOpenProps), [isOpenProps]);

  useEffect(() => {
    // If the storybook viewmode is "docs" and it is open
    if (isOpen && window?.location?.search.indexOf('viewMode=docs') !== -1) {
      // Closes
      setIsOpen(false);
    }
    // This is a "fix" that will help hide the modal if the viewMode=docs in storybook.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Date.now()]);

  const onToggle = useCallback(() => {
    onToggleCallback();
    setIsOpen(!isOpen);
  }, [onToggleCallback, isOpen]);

  return (
    <div>
      <button className="pui-btn-icon text-pui-primary p-4" onClick={onToggle}>
        {/* Adds a close icon */}
        <MenuIcon className="pui-animate-scaleHover-target fill-current" />
      </button>
      <Modal {...props} isOpen={isOpen} onToggle={onToggle}>
        <div className={classNameTrim(`${size ? `min-w-${size}` : ''}`)}>{content}</div>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: '1/6vw'
};

export const Large = Template.bind({});
Large.args = {
  size: '2/3vw'
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: '4/5vw'
};

export const Full = Template.bind({});
Full.args = {
  size: '100vw'
};

export const Fluid = Template.bind({});
Fluid.args = {
  size: undefined
};

export const AbsoluteHeader = Template.bind({});
AbsoluteHeader.args = {
  isHeaderAbsolute: true,
  title: undefined
};
