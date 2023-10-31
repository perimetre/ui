import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { BaseCard, BaseCardProps } from '.';

export default {
  title: 'Components/qadense/BaseCard',
  component: BaseCard,
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
    imageAlt: {
      control: {
        type: 'text'
      }
    },
    children: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    className: 'max-w-md',
    imageUrl: 'https://fakeimg.pl/370x110/',
    imageAlt: 'Image description',
    children: 'this is the content of the card'
  }
} as Meta;

/**
 * A story that displays a list connector
 * @param props the story props
 * @param props.children the color property set on controls
 * @param props.className the classes for element
 * @param props.imageUrl the image url set on controls
 * @param props.imageAlt the image url set on controls
 */
const Template: StoryFn<BaseCardProps & { color?: string }> = ({ ...props }) => <BaseCard {...props} />;

export const Default = Template.bind({});
