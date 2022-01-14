import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { colorOptions } from '../../prebuiltTailwindTheme';
import { ModuleCard, ModuleCardProps } from '.';

export default {
  title: 'Components/ModuleCard',
  component: ModuleCard,
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
    content: {
      defaultValue: 'Here goes the content or description of the card',
      control: {
        type: 'text'
      }
    },
    buttonContent: {
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
const Template: Story<ModuleCardProps & { color?: string }> = ({ ...props }) => <ModuleCard {...props} />;

export const Default = Template.bind({});

export const Gradient = Template.bind({});
Gradient.args = {
  filter: 'gradient'
};
