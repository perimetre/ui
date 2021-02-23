import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export type ReactPortalProps = { selector: string };

/**
 * A wrapper around react portal logic
 *
 * @param props the component props
 * @param props.selector the selector in which the portal should attach to
 * @param props.children the content of the portal
 */
export const ReactPortal: React.FC<ReactPortalProps> = ({ selector, children }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    if (ref.current) {
      setMounted(true);
    } else {
      console.warn(
        `Selector "${selector}" was given to ReactPortal but no element could be found with given selector. Make sure you have a <div> somewhere in your document, and that it includes ${selector}`
      );
    }
  }, [selector, ref]);

  return mounted ? createPortal(children, ref.current as Element) : null;
};
