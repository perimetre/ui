// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { defaultTheme } from '../Theme/theme';
import { Paragraph, TextProps } from './';

export default {
  title: 'Components/Text',
  component: Paragraph,
  argTypes: {
    m: {
      control: {
        type: 'select',
        options: Object.keys(defaultTheme.space)
      }
    }
  }
} as Meta;

const Template: Story<TextProps> = (args) => <Paragraph {...args}>Text</Paragraph>;

export const Text = Template.bind({});
Text.args = {
  m: 'px128'
};
