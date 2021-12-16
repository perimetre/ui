import React from 'react';
import classnames from 'classnames';
import { CheckIcon } from '..';

const bordersClassnameMap = {
  default: 'rounded-full',
  flatTop: 'pui-flatTop',
  flatBottom: 'pui-flatBottom',
  noRounded: 'pui-flat'
};

export type ListConnectorProps = {
  /**
   * Connector line borders
   *
   * @default default
   */
  borders?: keyof typeof bordersClassnameMap;
  /**
   * Whether or not the icon should appear
   */
  showIcon?: boolean;
};

/**
 * A List Connector
 *
 * @param props The input props
 * @param props.borders Set the borders in the connector bar
 * @param props.showIcon Show or hide the icon
 */
export const ListConnector: React.FC<ListConnectorProps> = ({ borders = 'default', showIcon }) => {
  return (
    <div className="flex flex-col items-center justify-items-center relative w-16 mr-5">
      <div className={classnames('pui-listConnector', bordersClassnameMap[borders])}></div>
      <div className="iconContainer">
        <div className="pui-listIcon">
          <CheckIcon width={16} height={16} className={classnames('pui-icon fill-current', { showIcon })}></CheckIcon>
        </div>
      </div>
    </div>
  );
};
