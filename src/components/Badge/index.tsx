import React, { useMemo } from 'react';
import classnames from 'classnames';

export type BadgeProps = {
  /**
   * The badge display number
   */
  content?: number;
  /**
   * The maximum number until the badge will add a "+" sign
   *
   * @default 9
   */
  maxValue?: number;
  /**
   * Whether or not the badge should have a pulsing effect
   */
  pulse?: boolean;
  /**
   * The badge variant
   *
   * @default default
   */
  variant?: 'default' | 'mini' | 'dot';
};

/**
 * A badge
 *
 * @param props the component props
 * @param props.content The badge display number
 * @param props.maxValue The maximum number until the badge will add a "+" sign
 * @param props.pulse Whether or not the badge should have a pulsing effect
 * @param props.variant The badge variant
 * @param props.children the provided children
 */
export const Badge: React.FC<BadgeProps> = ({
  content: propsContent,
  maxValue = 9,
  pulse,
  variant = 'default',
  children
}) => {
  const content = useMemo(() => (propsContent && propsContent > maxValue ? `${maxValue}+` : propsContent), [
    propsContent,
    maxValue
  ]);

  return (
    <div className="pui-badge">
      {children}
      {content && <span className={classnames(`pui-badge-${variant}`, { pulse })}>{variant !== 'dot' && content}</span>}
    </div>
  );
};
