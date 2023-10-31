import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { EventCard, EventCardProps } from '.';
import { gradientFromClassNameMap, gradientToClassNameMap, gradientViaClassNameMap } from '../../storybookMappers';

export default {
  title: 'Components/qadense/EventCard',
  component: EventCard,
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
    date: {
      control: {
        type: 'text'
      }
    },
    sponsorLabel: {
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
    tags: {
      control: {
        type: 'text'
      }
    },
    tagsLabel: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    imageUrl: 'https://fakeimg.pl/130x50/',
    title: 'This is a title',
    content:
      'Here goes the content or description of the card Prepare your business to begin exporting successfully by creating an export action plan with your advisor. Prepare your business.',
    buttonContent: 'View more CTA',
    date: '05 - dec - 2022',
    sponsorLabel: 'Sponsor by:',
    gradientInitialColor: 'from-pui-primary',
    gradientFinalColor: 'to-pui-secondary',
    gradientMiddleColor: 'to-pui-current',
    tags: 'Translate, Positioning, Export, Shipping',
    tagsLabel: 'Tags'
  }
} as Meta;

/**
 * A story that displays a Event card
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.className the classes for element
 * @param props.imageUrl the image url for the sponsor logo
 * @param props.title card title
 * @param props.content card description
 * @param props.date the event date
 * @param props.sponsorLabel the label for the sponsor logo
 * @param props.buttonLabel the label for the action button
 */
const Template: StoryFn<EventCardProps & { color?: string }> = ({ ...props }) => <EventCard {...props} />;

export const Default = Template.bind({});
