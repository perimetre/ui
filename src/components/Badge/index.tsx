import React, { useMemo } from 'react';
import classnames from 'classnames';

const variantClassnameMap = {
  default: 'pui-badge-default',
  mini: 'pui-badge-mini',
  dot: 'pui-badge-dot'
};

const placementClassnameMap = {
  ['top-right']: 'pui-badge-placement-top-right',
  ['bottom-right']: 'pui-badge-placement-bottom-right',
  ['top-left']: 'pui-badge-placement-top-left',
  ['bottom-left']: 'pui-badge-placement-bottom-left'
};

export type BadgeProps = {
  /**
   * The badge display number or text
   */
  content?: number | string;
  /**
   * The maximum number until the badge will add a "+" sign, only taken into consideration if `content` is of type number
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
  variant?: keyof typeof variantClassnameMap;
  /**
   * The badge placement
   *
   * @default top-right
   */
  placement?: keyof typeof placementClassnameMap;
};

/**
 * A badge
 *
 * @param props the component props
 * @param props.content The badge display number or text
 * @param props.maxValue The maximum number until the badge will add a "+" sign, only taken into consideration if `content` is of type number
 * @param props.pulse Whether or not the badge should have a pulsing effect
 * @param props.variant The badge variant
 * @param props.placement The bagge placement
 * @param props.children the provided children
 */
export const Badge: React.FC<BadgeProps> = ({
  content: propsContent,
  maxValue = 9,
  pulse,
  variant = 'default',
  placement = 'top-right',
  children
}) => {
  const content = useMemo(
    () =>
      typeof propsContent === 'number' ? (propsContent > maxValue ? `${maxValue}+` : `${propsContent}`) : propsContent,
    [propsContent, maxValue]
  );

  return (
    <div className="pui-badge">
      {children}
      {content && (
        <span className={classnames(variantClassnameMap[variant], placementClassnameMap[placement], { pulse })}>
          {variant !== 'dot' && content}
        </span>
      )}
    </div>
  );
};
