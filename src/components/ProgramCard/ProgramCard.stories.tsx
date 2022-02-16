import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { colorOptions } from '../../prebuiltTailwindTheme';
import { ProgramCard, ProgramCardProps } from '..';

export default {
  title: 'Components/ProgramCard',
  component: ProgramCard,
  argTypes: {
    color: {
      defaultValue: 'pui-primary',
      control: {
        type: 'select',
        options: colorOptions
      }
    },
    className: {
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
    title: {
      defaultValue: 'This is a title',
      control: {
        type: 'text'
      }
    },
    percentage: {
      defaultValue: '50',
      control: {
        type: 'text'
      }
    },
    buttonPercentage: {
      defaultValue: 'View more CTA',
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
 * @param props.imageUrl the image url set on controls
 */
const Template: Story<ProgramCardProps & { color?: string }> = ({ ...props }) => <ProgramCard {...props} />;

export const Default = Template.bind({});

export const Gradient = Template.bind({});
Gradient.args = {
  filter: 'gradient'
};
