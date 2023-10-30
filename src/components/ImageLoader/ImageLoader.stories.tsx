import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { ImageLoader, ImageLoaderProps } from '.';

export default {
  title: 'Components/Loaders/ImageLoader',
  component: ImageLoader,
  argTypes: {},
  args: {
    src: 'https://cataas.com/cat',
    alt: 'An image of a cat',
    className: 'w-64 h-64 object-cover',
    loaderClassName: 'w-64 h-64'
  }
} as Meta;

/**
 * A story that displays a ImageLoader example
 *
 * @param props the story props
 */
const Template: StoryFn<ImageLoaderProps> = (props) => <ImageLoader {...props} />;

export const Default = Template.bind({});
