import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ExpertCard, ExpertCardProps } from '.';
import { gradientFromClassNameMap, gradientToClassNameMap, gradientViaClassNameMap } from '../../storybookMappers';

export default {
  title: 'Components/qadense/ExpertCard',
  component: ExpertCard,
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
    advisorLastname: {
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
    email: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    imageUrl: 'https://fakeimg.pl/125x125/',
    title: 'This is a title',
    content:
      'From choosing the right ecommerce platform for your business to making sure you are covered on the legal front, the number of aspects you must handle and plan for can seem like an insurmountable challenge.  From choosing the right ecommerce platform for your business to making sure you are covered on the legal front',
    buttonContent: 'Schedule a meeting',
    advisorName: 'Mathew',
    advisorLastname: 'Casablanca',
    advisorTitle: 'Regional Leader Latam',
    gradientInitialColor: 'from-pui-primary',
    gradientFinalColor: 'to-pui-secondary',
    gradientMiddleColor: 'to-pui-current',
    email: 'advisoremail@test.com'
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
 * @param props.email advisor email
 * @param props.advisorTitle the title for the advisor
 * @param props.advisorName the advisor name
 * @param props.advisorLastname the advisor lastname
 * @param props.buttonLabel the label for the action button
 * @param props.counter the label for the action button
 */
const Template: StoryFn<ExpertCardProps & { color?: string }> = ({ ...props }) => <ExpertCard {...props} />;

export const Default = Template.bind({});
