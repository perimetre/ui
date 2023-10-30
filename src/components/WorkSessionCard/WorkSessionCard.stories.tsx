import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
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
      control: {
        type: 'text'
      }
    },
    title: {
      control: {
        type: 'text'
      }
    },
    content: {
      control: {
        type: 'text'
      }
    },
    buttonContent: {
      control: {
        type: 'text'
      }
    },
    advisorName: {
      control: {
        type: 'text'
      }
    },
    advisorTitle: {
      control: {
        type: 'text'
      }
    },
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
    counter: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    imageUrl: 'https://fakeimg.pl/60x60/',
    title: 'This is a title',
    content: 'Work Session preparation',
    buttonContent: 'Schedule a meeting',
    advisorName: 'Mathew Casablanca',
    advisorTitle: 'Regional Leader Latam',
    gradientInitialColor: 'from-pui-primary',
    gradientFinalColor: 'to-pui-secondary',
    gradientMiddleColor: 'to-pui-current',
    counter: '0/5'
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
const Template: StoryFn<WorkSessionCardProps & { color?: string }> = ({ ...props }) => <WorkSessionCard {...props} />;

export const Default = Template.bind({});
