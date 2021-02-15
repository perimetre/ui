import React, { useEffect, useState } from 'react';
import { classNameTrim } from '../../utils';
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
   * If yes. It won't push the content down and the padding should be set on the children component.
   */
  isHeaderAbsolute?: boolean;
  /**
   * A title string
   */
  title?: string;
};

/**
 * A Modal
 *
 * @param props The component props
 * @param props.isOpen Whether or not the modal should be open
 * @param props.onToggle Callback to update the isOpen state
 * @param props.isHeaderAbsolute Whether or not the top section with the close button should be absolute or not.
 * @param props.title A title string
 * @param props.children The provided children content
 */
export const Modal: React.FC<ModalProps> = ({ onToggle, isOpen: isOpenProps, isHeaderAbsolute, title, children }) => {
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
      if (e.keyCode === 27 && isOpen && onToggle) {
        onToggle();
      }
    };
    document.addEventListener('keydown', escape);

    // Component unmounted
    return () => {
      document.removeEventListener('keydown', escape);
    };
  }, [onToggle, isOpen]);

  return (
    <ReactPortal selector="#modal-root">
      <div className={classNameTrim(`pui-modal ${isOpen ? 'open' : ''}`)}>
        <div className="pui-modal-container">
          <div className={classNameTrim(`pui-modal-header ${isHeaderAbsolute ? 'absolute' : ''}`)}>
            <h3>{title}</h3>
            <button className="pui-btn-icon text-pui-paragraph-900 p-4" onClick={onToggle}>
              {/* Adds a close icon */}
              <CrossIcon className="pui-animate-scaleHover-target fill-current" />
            </button>
          </div>
          <div className="pui-modal-content">{children}</div>
        </div>
      </div>
    </ReactPortal>
  );
};
