import { motion } from 'framer-motion';
import React, { PropsWithChildren, useMemo, useState } from 'react';

export type ExpanderProps = {
  /**
   * Whether or not it should be expanded
   * @default true
   */
  isExpanded?: boolean;
};

/**
 * An expander component
 * @param props The component props
 * @param props.isExpanded Whether or not it should be expanded
 * @param props.children The provided children
 */
export const Expander: React.FC<PropsWithChildren<ExpanderProps>> = ({ children, isExpanded }) => {
  // Creates the animation variants
  const variants = useMemo(
    () => ({
      visible: { height: 'auto' },
      hidden: { height: 0 }
    }),
    []
  );

  // Creates a state only in the first render, to get the initial variant, based on the first value of isExpanded
  const [initialVariant] = useState(!isExpanded ? 'hidden' : 'visible');

  return (
    <motion.div
      style={{ overflow: 'hidden' }}
      // If it's collapsed use the hidden value, use the visible value otherwise
      animate={!isExpanded ? 'hidden' : 'visible'}
      initial={initialVariant}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
