import classNames from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';

export type VerticalResizeablePanelProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
  /**
   * Turn on or off the resizing behavior on the top border
   */
  resizeTop?: boolean;
  /**
   * Turn on or off the resizing behavior on the bottom border
   */
  resizeBottom?: boolean;
  /**
   * The minimum width allowed when resizing from the top border
   */
  minTopSize?: number;
  /**
   * The maximum width allowed when resizing from the top border
   */
  maxTopSize?: number;
  /**
   * The minimum width allowed when resizing from the bottom border
   */
  minBottomSize?: number;
  /**
   * The maximum width allowed when resizing from the bottom border
   */
  maxBottomSize?: number;
  /**
   * Callback that is called every time the panel is being resized
   */
  onResize?: () => void;
  /**
   * Callback for when the isResizing state changes
   */
  onResizeChange?: (isResizing: boolean) => void;
  /**
   * The content to render when the user is dragging the panel
   */
  renderDragContent?: (props: { isResizing: boolean }) => React.ReactNode;

  children?: (props: { isResizing: boolean }) => React.ReactNode;
};

/**
 * A panel with resize abilities on its top and bottom borders
 * @param props The component props
 * @param props.resizeTop Turn on or off the resizing behavior on the top border
 * @param props.resizeBottom Turn on or off the resizing behavior on the bottom border
 * @param props.minTopSize The minimum width allowed when resizing from the top border
 * @param props.maxTopSize The maximum width allowed when resizing from the top border
 * @param props.minBottomSize The minimum width allowed when resizing from the bottom border
 * @param props.maxBottomSize The maximum width allowed when resizing from the bottom border
 * @param props.onResize Callback that is called every time the panel is being resized
 * @param props.onResizeChange Callback for when the isResizing state changes
 * @param props.renderDragContent The content to render when the user is dragging the panel
 * @param props.children The element children components
 */
export const VerticalResizeablePanel: React.FC<VerticalResizeablePanelProps> = ({
  resizeTop,
  resizeBottom,
  minTopSize,
  maxTopSize,
  minBottomSize,
  maxBottomSize,
  onResize,
  onResizeChange,
  renderDragContent,
  children,
  ...props
}) => {
  const [isResizing, setIsResizing] = useState(false);

  const dragRef = useRef<{ isResizing: boolean; lastDownX: number; resizeSide: 'top' | 'bottom' } | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const didInitialize = useRef<boolean | null>(null);

  useEffect(() => {
    // If the method exists, and has the component initialized
    if (onResizeChange && didInitialize.current) {
      onResizeChange(isResizing);
    }

    if (!didInitialize.current) {
      didInitialize.current = true;
    }
  }, [isResizing, onResizeChange]);

  useEffect(() => {
    /**
     * Handler for when the user is moving the mouse
     * @param e The mouse event
     */
    const onMouseMove = (e: MouseEvent) => {
      // we don't want to do anything if we aren't resizing.
      if (!ref.current || !dragRef.current?.isResizing) return;

      if (onResize) onResize();

      if (dragRef.current.resizeSide === 'top') {
        let height = ref.current.clientHeight + (e.clientY - ref.current.offsetTop) * -1;

        if (minTopSize && height < minTopSize) {
          height = minTopSize;
        }

        if (maxTopSize && height > maxTopSize) {
          height = maxTopSize;
        }

        ref.current.style.height = `${height}px`;
      } else if (dragRef.current.resizeSide === 'bottom') {
        let height = e.clientY - 16;

        if (minBottomSize && height < minBottomSize) {
          height = minBottomSize;
        }

        if (maxBottomSize && height > maxBottomSize) {
          height = maxBottomSize;
        }

        ref.current.style.height = `${height}px`;
      }
    };

    /**
     * Handler for when the user stops dragging the mouse
     */
    const onMouseUp = () => {
      // Resets the values
      dragRef.current = { isResizing: false, lastDownX: 0, resizeSide: 'top' };
      setIsResizing(false);
    };

    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('mouseup', onMouseUp, false);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [maxTopSize, maxBottomSize, minTopSize, minBottomSize, onResize]);

  const onMove = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>, resizeSide: 'top' | 'bottom') => {
    dragRef.current = { isResizing: true, lastDownX: e.clientX, resizeSide };
    setIsResizing(true);
  }, []);

  return (
    <div {...props} className={classNames('relative', props.className)} ref={ref}>
      {resizeTop && (
        <button
          type="button"
          className="absolute w-full inset-x-0 h-2 cursor-row-resize group"
          style={{ top: '-5px' }}
          onMouseDown={(e) => onMove(e, 'top')}
        >
          {renderDragContent && renderDragContent({ isResizing })}
        </button>
      )}
      {resizeBottom && (
        <button
          type="button"
          className="absolute w-full inset-x-0 h-2 cursor-row-resize group"
          style={{ bottom: '-5px' }}
          onMouseDown={(e) => onMove(e, 'bottom')}
        >
          {renderDragContent && renderDragContent({ isResizing })}
        </button>
      )}
      {children && children({ isResizing })}
    </div>
  );
};
