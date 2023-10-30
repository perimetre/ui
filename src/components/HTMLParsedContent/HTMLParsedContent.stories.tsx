import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { HTMLParsedContent, HTMLParsedContentProps } from '.';

const htmlContent = `<h1>Heading 1</h1>
<p>My paragraph</p>
<p>Another paragraph</p>

<h2>Heading 2</h2>
<ul>
  <li>Unordered</li>
  <li>List</li>
</ul>

<h3>Heading 3</h3>
<ol>
  <li>Ordered</li>
  <li>List</li>
</ol>

<h4>Heading 4</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero soluta explicabo facilis eos repellendus adipisci quasi dicta cumque voluptate!</p>

<blockquote>This is the Way. (And the blockquote)</blockquote>

<h5>Heading 5</h5>
<p>When one chooses to walk the Way of the Mandalore, you are both <a href="#">hunter</a> and prey.</p>

<p>Read more <a href="https://tailwindcss-typography.netlify.app/" target="_blank">here</a>.</p>

<p>Send us an <a href="mailto:email@perimetre.co">email</a>.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt="">
  <figcaption>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</figcaption>
</figure>

<h6>Heading 6</h6>
<p>Last paragraph</p>`;

export default {
  title: 'Components/HTMLParsedContent',
  component: HTMLParsedContent,
  argTypes: {
    content: {
      control: {
        type: 'text'
      }
    },
    className: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    content: htmlContent
  }
} as Meta;

/**
 * A story that displays a HTMLParsedContent example
 *
 * @param props the story props
 * @param props.content the content property set on controls
 * @param props.className the component classes
 */
const Template: StoryFn<HTMLParsedContentProps> = (props) => <HTMLParsedContent {...props} />;

export const ParseContent = Template.bind({});
