import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { borderStyleOptions, colorOptions } from '../../prebuiltTailwindTheme';

export default {
  title: 'Components/Chip',
  argTypes: {
    variant: {
      defaultValue: 'default',
      control: {
        type: 'radio',
        options: ['default', 'bordered']
      }
    },
    border: {
      control: {
        type: 'check',
        options: borderStyleOptions
      }
    },
    color: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: colorOptions
      }
    },
    text: {
      control: {
        type: 'select',
        options: colorOptions
      }
    },
    content: {
      defaultValue: 'Chip content',
      control: {
        type: 'text'
      }
    },
    className: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta;

/**
 * A story that displays a chip example
 *
 * @param props the story props
 * @param props.variant the variant property set on controls
 * @param props.border the border property set on controls
 * @param props.color the color property set on controls
 * @param props.content the content property set on controls
 * @param props.text the text property set on controls
 * @param props.className the component classes
 */
const Template: Story = ({ variant, border, color, content, text, className, ...props }) => (
  <span
    {...props}
    className={[
      `pui-chip-${variant}`,
      `pui-color-${color}`,
      // If any of the border propery is set, add the tailwind border class
      ...(border && border.length > 0 ? [`border-${border}`] : []),
      // If the text property is set, change the text color
      ...(text && text.length > 0 ? [`text-${text}`] : []),
      // Add remaining classes
      ...(className && className.length > 0 ? [className] : [])
    ].join(' ')}
  >
    {content}
  </span>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary'
};

export const BorderedPrimary = Template.bind({});
BorderedPrimary.args = {
  variant: 'bordered'
};

export const Dashed = Template.bind({});
Dashed.args = {
  variant: 'bordered',
  border: 'dashed'
};

export const ColoredText = Template.bind({});
ColoredText.args = {
  color: 'gray-200',
  text: 'paragraph-500'
};

// TODO: Add "With icon"
