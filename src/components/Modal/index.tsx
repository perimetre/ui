import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { CrossIcon } from '../Icons';
import { ReactPortal } from '../ReactPortal';

export type ModalProps = {
  /**
   * Whether or not the modal should be open
   *
   * @default false
   */
  isOpen?: boolean;
  /**
   * Callback to update the isOpen state
   */
  onToggle?: () => void;
  /**
   * Whether or not the top section with the close button should be absolute or not.
   * If yes. It won't push the content down and the hasPadding should be set on the children component.
   */
  isHeaderAbsolute?: boolean;
  /**
   * A title string
   */
  title?: string;
  /**
   * If true the close button won't be displayed and user won't be able to close modal by any means
   */
  isClosable?: boolean;
  /**
   * What style of the componenteZ should be displayed
   */
  variant?: 'default' | 'new';
  /**
   * Whether the padding of content container should be removed
   */
  removePadding?: boolean;
  /**
   * A component that if provided will add a "actions" footer
   */
  actions?: () => React.ReactNode;
};

/**
 * A Modal
 *
 * @param props The component props
 * @param props.isOpen Whether or not the modal should be open
 * @param props.onToggle Callback to update the isOpen state
 * @param props.isHeaderAbsolute Whether or not the top section with the close button should be absolute or not.
 * @param props.title A title string
 * @param props.actions A component that if provided will add a "actions" footer
 * @param props.children The provided children content
 * @param props.isClosable If true the close button won't be displayed and user won't be able to close modal by any means
 * @param props.variant What style should be displayed
 * @param props.removePadding Whether the padding of content container should be removed
 */
export const Modal: React.FC<ModalProps> = ({
  onToggle,
  isOpen: isOpenProps,
  isHeaderAbsolute,
  title,
  actions,
  removePadding,
  variant = 'Default',
  isClosable = true,
  children
}) => {
  const [isOpen, setIsOpen] = useState(!!isOpenProps);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => setIsOpen(!!isOpenProps), [isOpenProps]);

  useEffect(() => {
    /**
     * If pressing esc
     *
     * @param e the event parameter provided by javascript
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const escape = (e: any) => {
      if (e.keyCode === 27 && isOpen && onToggle && isClosable) {
        onToggle();
      }
    };
    document.addEventListener('keydown', escape);

    // Component unmounted
    return () => {
      document.removeEventListener('keydown', escape);
    };
  }, [onToggle, isOpen, isClosable]);

  return (
    <ReactPortal selector="#modal-root">
      <div className={classnames('pui-modal', { open: isOpen })}>
        <div className={classnames('pui-modal-container', { 'new': variant === 'new' })}>
          <div className={classnames('pui-modal-header ', { 'absolute z-30': isHeaderAbsolute })}>
            <h3 className={classnames(removePadding ? 'p-0' : 'p-4')}>{title}</h3>
            {/* Adds a close icon */}
            {isClosable && (
              <button className="pui-btn-icon text-pui-paragraph-900 px-6 py-4" onClick={onToggle}>
                <CrossIcon className="pui-animate-scaleHover-target" />
              </button>
            )}
          </div>
          <div className={classnames('pui-modal-content', removePadding ? 'p-0' : 'p-4')}>{children}</div>
          {actions && <div className="pui-modal-actions">{actions()}</div>}
        </div>
      </div>
    </ReactPortal>
  );
};
