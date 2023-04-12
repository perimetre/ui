// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ImageLoader, ImageLoaderProps } from '.';

export default {
  title: 'Components/Loaders/ImageLoader',
  component: ImageLoader,
  argTypes: {
    src: { defaultValue: 'https://cataas.com/cat' },
    alt: { defaultValue: 'An image of a cat' },
    className: { defaultValue: 'w-64 h-64 object-cover' },
    loaderClassName: { defaultValue: 'w-64 h-64' }
  }
} as Meta;

/**
 * A story that displays a ImageLoader example
 *
 * @param props the story props
 */
const Template: Story<ImageLoaderProps> = (props) => <ImageLoader {...props} />;

export const Default = Template.bind({});
