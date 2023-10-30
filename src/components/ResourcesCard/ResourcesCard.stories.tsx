import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ResourcesCard, ResourcesCardProps } from '.';

export default {
  title: 'Components/qadense/ResourcesCard',
  component: ResourcesCard,
  argTypes: {
    className: {
      control: {
        type: 'text'
      }
    },
    imageUrl: {
      defaultValue: 'https://fakeimg.pl/260x80/',
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
        'Adopting ecommerce means a lot more than just taking orders online. To succeed and be profitable, you must plan for all the aspects of ecommerce that impact your value chain.',
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
 * @param props.className the classes for element
 * @param props.imageUrl the image url for the sponsor logo
 * @param props.title card title
 * @param props.content card description
 */
const Template: StoryFn<ResourcesCardProps & { color?: string }> = ({ ...props }) => <ResourcesCard {...props} />;

export const Default = Template.bind({});
