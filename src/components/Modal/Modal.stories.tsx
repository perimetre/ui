import { Meta, StoryFn } from '@storybook/react';
import React, { useCallback, useEffect, useState } from 'react';
import { Modal, ModalProps } from '.';
import { minWidthOptions } from '../../prebuiltTailwindTheme';
import classnames from 'classnames';
import { MenuIcon } from '../Icons';
import { minWidthClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    size: {
      options: minWidthOptions,
      control: {
        type: 'select'
      }
    },
    position: {
      options: ['default', 'center'],
      control: {
        type: 'select'
      }
    },
    isClosable: {
      control: {
        type: 'boolean'
      }
    },
    removePadding: {
      control: {
        type: 'boolean'
      }
    },
    variant: {
      options: ['default', 'new'],
      control: {
        type: 'select'
      }
    },
    content: {
      control: {
        type: 'text'
      }
    },
    onToggleCallback: { action: 'onToggle' }
  },
  args: {
    isOpen: true,
    title: 'This is my modal',
    size: '2/5vw',
    position: 'default',
    isClosable: true,
    removePadding: false,
    variant: 'default',
    content: 'A modal content'
  }
} as Meta;

type StoryFnProps = ModalProps & {
  size?: keyof typeof minWidthClassnameMap;
  position?: keyof typeof minWidthClassnameMap;
  content?: string;
  onToggleCallback: () => void;
};

/**
 * A story that displays a modal example
 * @param props the story props
 * @param props.content The content property set on controls
 * @param props.onToggle Callback to update the open state
 * @param props.isOpen Whether or not the drawer should be open
 * @param props.onToggleCallback to update the open state
 * @param props.size The size property set on controls
 * @param props.content.viewMode The storybook viewmode, whether it's on canvas or docs
 */
const Template: StoryFn<StoryFnProps> = (
  { content, isOpen: isOpenProps, onToggleCallback, size, ...props },
  { viewMode }
) => {
  // If the viewmode is "docs", don't start it opened
  const [isOpen, setIsOpen] = useState(viewMode === 'docs' ? false : isOpenProps);

  useEffect(() => setIsOpen(isOpenProps), [isOpenProps]);

  useEffect(() => {
    // If the storybook viewmode is "docs" and it is open
    if (isOpen && viewMode === 'docs') {
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
        <MenuIcon className="pui-animate-scaleHover-target" />
      </button>
      <Modal {...props} isOpen={isOpen} onToggle={onToggle}>
        <div className={classnames({ [minWidthClassnameMap[size || 'initial']]: !!size })}>{content}</div>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});

/**
 * A story that displays a modal example
 * @param props the story props
 * @param props.content The content property set on controls
 * @param props.onToggle Callback to update the open state
 * @param props.isOpen Whether or not the drawer should be open
 * @param props.onToggleCallback to update the open state
 * @param props.size The size property set on controls
 * @param props.content.viewMode The storybook viewmode, whether it's on canvas or docs
 */
const WithActionsTemplate: StoryFn<StoryFnProps> = (
  { content, isOpen: isOpenProps, onToggleCallback, size, ...props },
  { viewMode }
) => {
  // If the viewmode is "docs", don't start it opened
  const [isOpen, setIsOpen] = useState(viewMode === 'docs' ? false : isOpenProps);

  useEffect(() => setIsOpen(isOpenProps), [isOpenProps]);

  useEffect(() => {
    // If the storybook viewmode is "docs" and it is open
    if (isOpen && viewMode === 'docs') {
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
        <MenuIcon className="pui-animate-scaleHover-target" />
      </button>
      <Modal
        {...props}
        isOpen={isOpen}
        onToggle={onToggle}
        actions={() => (
          <>
            <button className="pui-btn-default pui-color-pui-error" onClick={onToggle}>
              Cancel
            </button>
            <button className="pui-btn-default" onClick={onToggle}>
              Ok
            </button>
          </>
        )}
      >
        <div className={classnames({ [minWidthClassnameMap[size || 'initial']]: !!size })}>{content}</div>
      </Modal>
    </div>
  );
};

export const WithActions = WithActionsTemplate.bind({});

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
