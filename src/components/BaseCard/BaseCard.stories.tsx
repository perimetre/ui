import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { BaseCard, BaseCardProps } from '.';

export default {
  title: 'Components/qadense/BaseCard',
  component: BaseCard,
  argTypes: {
    className: {
      defaultValue: 'max-w-md',
      control: {
        type: 'text'
      }
    },
    imageUrl: {
      defaultValue: 'https://fakeimg.pl/370x110/',
      control: {
        type: 'text'
      }
    },
    imageAlt: {
      defaultValue: 'Image description',
      control: {
        type: 'text'
      }
    },
    children: {
      defaultValue: 'this is the content of the card',
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
 * @param props.children the color property set on controls
 * @param props.className the classes for element
 * @param props.imageUrl the image url set on controls
 * @param props.imageAlt the image url set on controls
 */
const Template: Story<BaseCardProps & { color?: string }> = ({ ...props }) => <BaseCard {...props} />;

export const Default = Template.bind({});
