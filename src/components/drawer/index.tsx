import React, { useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Hammer from 'hammerjs';
import { BackIcon, CrossIcon } from '../icons';

// The variants for the drawer itself
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' }
};

// The variants for the drawer backdrop overlay
const overlayVariants = {
  open: { opacity: 1, pointerEvents: 'auto' as const },
  closed: { opacity: 0, pointerEvents: 'none' as const }
};

export type DrawerWrapperProps = {
  /**
   * Whether or not the drawer should be open
   *
   * @default false
   */
  isOpen: boolean;
  /**
   * Callback to update the open state
   */
  onOpen: (isOpen: boolean) => void;
};

/**
 * The logic wrapper for the drawer
 *
 * @param props The provided props
 * @param props.isOpen Whether or not the drawer should be open
 * @param props.onOpen Callback to update the open state
 * @param props.children The children provided to this component
 */
// Ref: https://codesandbox.io/s/framer-motion-drawer-dcnuv?file=/src/Drawer.tsx
export const DrawerWrapper: React.FC<DrawerWrapperProps> = ({
  isOpen = false,
  onOpen = (isOpen?: boolean) => console.log('onOpen: ', isOpen),
  children
}) => {
  /**
   * Toggles the isOpenState
   */
  const toggle = useCallback(() => onOpen(!isOpen), [isOpen, onOpen]);

  // Gets a reference for the drawer element
  const drawerRef = useRef<null | HTMLDivElement>(null);
  // A reference for the panner element
  const pannerRef = useRef<null | HTMLDivElement>(null);

  // Unfortunately we don't have access to the HammerManager type and have to use "any"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hammertimeDrawer = useRef<any>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hammertimePanner = useRef<any>();

  // On load
  useEffect(() => {
    // If there's a drawer element
    if (drawerRef?.current) {
      if (!hammertimeDrawer?.current) {
        // Creates an instance of Hammer
        hammertimeDrawer.current = new Hammer(drawerRef.current, {
          touchAction: 'pan-y'
        });
      }

      // On swipe left, toggle the drawer
      hammertimeDrawer?.current?.on('swipeleft', toggle);
    }

    // If there's a "panner" element
    if (pannerRef?.current) {
      if (!hammertimePanner?.current) {
        // Creates an instance of Hammer
        hammertimePanner.current = new Hammer(pannerRef.current, {
          touchAction: 'pan-y'
        });
      }

      // On swipe right, toggle the drawer
      hammertimePanner?.current?.on('swiperight', toggle);
    }

    // On unmount
    return () => {
      // Unsubscribe
      hammertimeDrawer?.current?.off('swipeleft', toggle);
      hammertimePanner?.current?.off('swiperight', toggle);
    };
  }, [toggle]);

  return (
    <>
      {/* Just a trigger to have a swipe right if drawer is closed */}
      <div ref={pannerRef} className="z-20 fixed inset-y-0 p-4" />

      {/* The backdrop overlay that appears behind the drawer */}
      <motion.div
        className="z-10 fixed inset-0 bg-black"
        style={
          {
            '--tw-bg-opacity': 0.4
          } as React.CSSProperties
        }
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={overlayVariants}
        transition={{ type: 'tween' }}
        onClick={toggle}
      />

      {/* The element that animates in and out */}
      <motion.div
        ref={drawerRef}
        className="fixed top-0 bottom-0 z-30"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        transition={{ type: 'spring', stiffness: 350, damping: 40 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export type DrawerProps = DrawerWrapperProps & {
  /**
   * Sets the default width
   *
   * @default 350
   */
  width?: number;
  /**
   * Callback when pressed the back button. If set, a "back" button will appear
   */
  onBack?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

/**
 * Displays a drawer
 *
 * @param props The provided props
 * @param props.width Sets the default width
 * @param props.onBack Callback when pressed the back button
 * @param props.onOpen Callback to update the open state
 * @param props.children The children provided to this component
 */
export const Drawer: React.FC<DrawerProps> = ({
  width = 350,
  onBack,
  onOpen = (isOpen?: boolean) => console.log('onOpen: ', isOpen),
  children,
  ...props
}) => (
  <DrawerWrapper onOpen={onOpen} {...props}>
    {/* Adds a "card-like" look to the drawer */}
    <div style={{ width }} className="bg-white border border-gray-300 h-full select-text">
      {/* Aligns the close button to the end */}
      <div className={`flex items-center${onBack ? ' justify-between' : ' justify-end'}`}>
        {/* If there's the back button, display it */}
        {onBack && (
          <button onClick={onBack} className="p-4 text-pui-paragraph-900 focus:outline-none pui-animate-scaleHover">
            {/* Adds a close icon */}
            <BackIcon className="pui-animate-scaleHover-target" />
          </button>
        )}
        <button
          onClick={() => onOpen(false)}
          className="p-4 text-pui-paragraph-900 focus:outline-none pui-animate-scaleHover"
        >
          {/* Adds a close icon */}
          <CrossIcon className="pui-animate-scaleHover-target" />
        </button>
      </div>
      {/* Drawer content */}
      {children}
    </div>
  </DrawerWrapper>
);
