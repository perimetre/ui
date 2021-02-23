// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useEffect, useState } from 'react';
import { Expander, ExpanderProps } from '.';
import classnames from 'classnames';
import { AngleDownIcon } from '../Icons';

export default {
  title: 'Components/Expander',
  component: Expander
} as Meta;

/**
 * A story that displays a dropdown input example
 *
 * @param props The story props
 * @param props.isExpanded Whether or not it should be expanded
 * @param props.label The label property set on controls
 * @param props.open The open property set on controls
 */
const Template: Story<ExpanderProps> = ({ isExpanded: isExpandedProps, ...props }) => {
  const [isExpanded, setIsExpanded] = useState(isExpandedProps);

  useEffect(() => setIsExpanded(!!isExpandedProps), [isExpandedProps]);

  return (
    <div>
      <Expander {...props} isExpanded={isExpanded}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque numquam minima, blanditiis, quibusdam, nesciunt
        itaque nisi iure illum fugit impedit aliquam quasi? Quod voluptates et, quo perspiciatis dolor facere nisi
        dolore. Tempora adipisci atque sint quia placeat repellat expedita veniam dignissimos exercitationem ratione
        dicta optio, sequi maiores, at eos. Quas nobis minus autem unde? Optio quidem iure, molestias aut sequi saepe
        nobis libero, dolorum quaerat eius provident odit vero voluptas pariatur ad debitis voluptatem dolore. Illum,
        totam. Eaque unde reiciendis modi, maiores rerum quae dolorem natus quas, porro obcaecati aliquid hic nemo velit
        cum omnis ex voluptates eligendi tempore soluta.
      </Expander>
      <button
        type="button"
        className="pui-btn-medium pui-btn-default flex items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Open{' '}
        <AngleDownIcon
          className={classnames('pui-animate-scaleHover-target ml-2 transition-transform transform-gpu', {
            'rotate-180': isExpanded
          })}
        />
      </button>
    </div>
  );
};

export const Default = Template.bind({});
