import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { colorOptions } from '../../prebuiltTailwindTheme';
import { ModuleCard, ModuleCardProps } from '.';

export default {
  title: 'Components/qadense/ModuleCard',
  component: ModuleCard,
  argTypes: {
    color: {
      options: colorOptions,
      control: {
        type: 'select'
      }
    },
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
      defaultValue: 'This is a title',
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
    }
  },
  args: {
    color: 'pui-primary',
    imageUrl: 'https://fakeimg.pl/370x110/',
    title: 'This is a title',
    content: 'Here goes the content or description of the card',
    buttonContent: 'View more CTA'
  }
} as Meta;

/**
 * A story that displays a list connector
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.className the classes for element
 * @param props.imageUrl the image url set on controls
 */
const Template: StoryFn<ModuleCardProps & { color?: string }> = ({ ...props }) => <ModuleCard {...props} />;

export const Default = Template.bind({});

export const Gradient = Template.bind({});
Gradient.args = {
  filter: 'gradient'
};
