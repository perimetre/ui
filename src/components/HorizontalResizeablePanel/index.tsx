import classNames from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export type HorizontalResizeablePanelProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
  /**
   * Turn on or off the resizing behavior on the left border
   */
  resizeLeft?: boolean;
  /**
   * Turn on or off the resizing behavior on the right border
   */
  resizeRight?: boolean;
  /**
   * The minimum width allowed when resizing from the left border
   */
  minLeftSize?: number;
  /**
   * The maximum width allowed when resizing from the left border
   */
  maxLeftSize?: number;
  /**
   * The minimum width allowed when resizing from the right border
   */
  minRightSize?: number;
  /**
   * The maximum width allowed when resizing from the right border
   */
  maxRightSize?: number;
  /**
   * Callback that is called every time the panel is being resized
   */
  onResize?: () => void;
  /**
   * Callback for when the isResizing state changes
   */
  onResizeChange?: (isResizing: boolean) => void;

  children?: (props: { isResizing: boolean }) => React.ReactNode;
};

/**
 * A panel with resize abilities on its left and right borders
 *
 * @param props The component props
 * @param props.resizeLeft Turn on or off the resizing behavior on the left border
 * @param props.resizeRight Turn on or off the resizing behavior on the right border
 * @param props.minLeftSize The minimum width allowed when resizing from the left border
 * @param props.maxLeftSize The maximum width allowed when resizing from the left border
 * @param props.minRightSize The minimum width allowed when resizing from the right border
 * @param props.maxRightSize The maximum width allowed when resizing from the right border
 * @param props.onResize Callback that is called every time the panel is being resized
 * @param props.onResizeChange Callback for when the isResizing state changes
 * @param props.children The element children components
 */
export const HorizontalResizeablePanel: React.FC<HorizontalResizeablePanelProps> = ({
  resizeLeft,
  resizeRight,
  minLeftSize,
  maxLeftSize,
  minRightSize,
  maxRightSize,
  onResize,
  onResizeChange,
  children,
  ...props
}) => {
  const [isResizing, setIsResizing] = useState(false);

  const dragRef = useRef<{ isResizing: boolean; lastDownX: number; resizeSide: 'left' | 'right' } | null>(null);
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
     *
     * @param e The mouse event
     */
    const onMouseMove = (e: MouseEvent) => {
      // we don't want to do anything if we aren't resizing.
      if (!ref.current || !dragRef.current?.isResizing) return;

      if (onResize) onResize();

      if (dragRef.current.resizeSide === 'left') {
        let width = ref.current.clientWidth + (e.clientX - ref.current.offsetLeft) * -1;

        if (minLeftSize && width < minLeftSize) {
          width = minLeftSize;
        }

        if (maxLeftSize && width > maxLeftSize) {
          width = maxLeftSize;
        }

        ref.current.style.width = `${width}px`;
      } else if (dragRef.current.resizeSide === 'right') {
        let width = e.clientX - ref.current.offsetLeft;

        if (minRightSize && width < minRightSize) {
          width = minRightSize;
        }

        if (maxRightSize && width > maxRightSize) {
          width = maxRightSize;
        }

        ref.current.style.width = `${width}px`;
      }
    };

    /**
     * Handler for when the user stops dragging the mouse
     */
    const onMouseUp = () => {
      // Resets the values
      dragRef.current = { isResizing: false, lastDownX: 0, resizeSide: 'left' };
      setIsResizing(false);
    };

    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('mouseup', onMouseUp, false);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [maxLeftSize, maxRightSize, minLeftSize, minRightSize, onResize]);

  const onMove = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>, resizeSide: 'left' | 'right') => {
    dragRef.current = { isResizing: true, lastDownX: e.clientX, resizeSide };
    setIsResizing(true);
  }, []);

  return (
    <div {...props} className={classNames('relative', props.className)} ref={ref}>
      {resizeLeft && (
        <button
          type="button"
          className="absolute h-full inset-y-0 w-2 cursor-col-resize"
          style={{ left: '-4px' }}
          onMouseDown={(e) => onMove(e, 'left')}
        />
      )}
      {resizeRight && (
        <button
          type="button"
          className="absolute h-full inset-y-0 w-2 cursor-col-resize"
          style={{ right: '-4px' }}
          onMouseDown={(e) => onMove(e, 'right')}
        />
      )}
      {children && children({ isResizing })}
    </div>
  );
};
