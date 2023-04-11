import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import classnames from 'classnames';
import { gradientFromClassNameMap, gradientToClassNameMap, gradientViaClassNameMap } from '../../storybookMappers';

export default {
  title: 'Components/qadense/ExpertImage',
  argTypes: {
    gradientInitialColor: {
      defaultValue: 'from-pui-primary',
      control: {
        type: 'select',
        options: gradientFromClassNameMap
      }
    },
    gradientFinalColor: {
      defaultValue: 'to-pui-secondary',
      control: {
        type: 'select',
        options: gradientToClassNameMap
      }
    },
    gradientMiddleColor: {
      defaultValue: 'to-pui-current',
      control: {
        type: 'select',
        options: gradientViaClassNameMap
      }
    },
    url: {
      defaultValue: 'https://fakeimg.pl/250x250/',
      control: {
        type: 'text'
      }
    },
    className: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta;

/**
 * A story that displays an alert example
 *
 * @param props the story props
 * @param props.gradientInitialColor the initial gradient color property set on controls
 * @param props.gradientMiddleColor the middle gradient color property set on controls
 * @param props.gradientFinalColor the final gradient color property set on controls
 * @param props.url the image url set on controls
 * @param props.className the component classes
 */
const Template: Story = ({
  url,
  className,
  gradientInitialColor,
  gradientMiddleColor,
  gradientFinalColor,
  ...props
}) => (
  <>
    <div
      {...props}
      className={classnames(
        'pui-expertImage',
        `bg-gradient-to-b ${gradientInitialColor} ${gradientMiddleColor} ${gradientFinalColor}`,
        'inline-flex items-cent',
        className
      )}
    >
      <img src={url} alt="" className="rounded-full w-full h-full" />
    </div>
  </>
);

export const Default = Template.bind({});
