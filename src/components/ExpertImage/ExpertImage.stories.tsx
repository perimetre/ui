import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import classnames from 'classnames';
import { gradientFromClassNameMap, gradientToClassNameMap, gradientViaClassNameMap } from '../../storybookMappers';

export default {
  title: 'Components/qadense/ExpertImage',
  argTypes: {
    gradientInitialColor: {
      options: gradientFromClassNameMap,
      control: {
        type: 'select'
      }
    },
    gradientFinalColor: {
      options: gradientToClassNameMap,
      control: {
        type: 'select'
      }
    },
    gradientMiddleColor: {
      options: gradientViaClassNameMap,
      control: {
        type: 'select'
      }
    },
    url: {
      control: {
        type: 'text'
      }
    },
    className: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    gradientInitialColor: 'from-pui-primary',
    gradientFinalColor: 'to-pui-secondary',
    gradientMiddleColor: 'to-pui-current',
    url: 'https://fakeimg.pl/250x250/'
  }
} as Meta;

/**
 * A story that displays an alert example
 * @param props the story props
 * @param props.gradientInitialColor the initial gradient color property set on controls
 * @param props.gradientMiddleColor the middle gradient color property set on controls
 * @param props.gradientFinalColor the final gradient color property set on controls
 * @param props.url the image url set on controls
 * @param props.className the component classes
 */
const Template: StoryFn = ({
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
