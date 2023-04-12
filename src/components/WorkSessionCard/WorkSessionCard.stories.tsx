import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { WorkSessionCard, WorkSessionCardProps } from '.';
import { gradientFromClassNameMap, gradientToClassNameMap, gradientViaClassNameMap } from '../../storybookMappers';

export default {
  title: 'Components/qadense/WorkSessionCard',
  component: WorkSessionCard,
  argTypes: {
    className: {
      control: {
        type: 'text'
      }
    },
    imageUrl: {
      defaultValue: 'https://fakeimg.pl/60x60/',
      control: {
        type: 'text'
      }
    },
    title: {
      defaultValue: 'This is a title',
      control: {
        type: 'text'
      }
    },
    content: {
      defaultValue: 'Work Session preparation',
      control: {
        type: 'text'
      }
    },
    buttonContent: {
      defaultValue: 'Schedule a meeting',
      control: {
        type: 'text'
      }
    },
    advisorName: {
      defaultValue: 'Mathew Casablanca',
      control: {
        type: 'text'
      }
    },
    advisorTitle: {
      defaultValue: 'Regional Leader Latam',
      control: {
        type: 'text'
      }
    },
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
    counter: {
      defaultValue: '0/5',
      control: {
        type: 'text'
      }
    }
  }
} as Meta;

/**
 * A story that displays a list connector
 *
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.className the classes for element
 * @param props.imageUrl the image url for the sponsor logo
 * @param props.title card title
 * @param props.content card description
 * @param props.advisorTitle the title for the advisor
 * @param props.advisorName the advisor name
 * @param props.buttonLabel the label for the action button
 * @param props.counter the label for the action button
 */
const Template: Story<WorkSessionCardProps & { color?: string }> = ({ ...props }) => <WorkSessionCard {...props} />;

export const Default = Template.bind({});
