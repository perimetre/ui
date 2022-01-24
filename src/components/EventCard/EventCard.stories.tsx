import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { EventCard, EventCardProps } from '.';
import { gradientFromClassNameMap, gradientToClassNameMap, gradientViaClassNameMap } from '../../storybookMappers';

export default {
  title: 'Components/EventCard',
  component: EventCard,
  argTypes: {
    className: {
      control: {
        type: 'text'
      }
    },
    imageUrl: {
      defaultValue: 'https://fakeimg.pl/130x50/',
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
        'Here goes the content or description of the card Prepare your business to begin exporting successfully by creating an export action plan with your advisor. Prepare your business.',
      control: {
        type: 'text'
      }
    },
    buttonContent: {
      defaultValue: 'View more CTA',
      control: {
        type: 'text'
      }
    },
    date: {
      defaultValue: '05 - dec - 2022',
      control: {
        type: 'text'
      }
    },
    sponsorLabel: {
      defaultValue: 'Sponsor by:',
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
    tags: {
      defaultValue: 'Translate, Positioning, Export, Shipping',
      control: {
        type: 'text'
      }
    },
    tagsLabel: {
      defaultValue: 'Tags',
      control: {
        type: 'text'
      }
    }
  }
} as Meta;

/**
 * A story that displays a Event card
 *
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
const Template: Story<EventCardProps & { color?: string }> = ({ ...props }) => <EventCard {...props} />;

export const Default = Template.bind({});
