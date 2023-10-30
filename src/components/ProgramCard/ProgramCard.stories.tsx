import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { colorOptions } from '../../prebuiltTailwindTheme';
import { ProgramCard, ProgramCardProps } from '..';

export default {
  title: 'Components/qadense/ProgramCard',
  component: ProgramCard,
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
      control: {
        type: 'text'
      }
    },
    percentage: {
      control: {
        type: 'text'
      }
    },
    buttonPercentage: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    color: 'pui-primary',
    imageUrl: 'https://fakeimg.pl/370x110/',
    title: 'This is a title',
    percentage: '50',
    buttonPercentage: 'View more CTA'
  }
} as Meta;

/**
 * A story that displays a list connector
 *
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.className the classes for element
 * @param props.imageUrl the image url set on controls
 */
const Template: StoryFn<ProgramCardProps & { color?: string }> = ({ ...props }) => <ProgramCard {...props} />;

export const Default = Template.bind({});

export const Gradient = Template.bind({});
Gradient.args = {
  filter: 'gradient'
};
