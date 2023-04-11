import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
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
      defaultValue: 'https://fakeimg.pl/125x125/',
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
      defaultValue:
        'From choosing the right ecommerce platform for your business to making sure you are covered on the legal front, the number of aspects you must handle and plan for can seem like an insurmountable challenge.  From choosing the right ecommerce platform for your business to making sure you are covered on the legal front',
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
      defaultValue: 'Mathew',
      control: {
        type: 'text'
      }
    },
    advisorLastname: {
      defaultValue: 'Casablanca',
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
    email: {
      defaultValue: 'advisoremail@test.com',
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
 * @param props.email advisor email
 * @param props.advisorTitle the title for the advisor
 * @param props.advisorName the advisor name
 * @param props.advisorLastname the advisor lastname
 * @param props.buttonLabel the label for the action button
 * @param props.counter the label for the action button
 */
const Template: Story<ExpertCardProps & { color?: string }> = ({ ...props }) => <ExpertCard {...props} />;

export const Default = Template.bind({});
