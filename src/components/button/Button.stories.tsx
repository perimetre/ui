import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { borderStyleOptions, colorOptions } from '../../prebuiltTailwindTheme';

export default {
  title: 'Components/Button',
  argTypes: {
    size: {
      defaultValue: 'medium',
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large', 'xlarge']
      }
    },
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
    chip: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
    content: {
      defaultValue: 'Button',
      control: {
        type: 'text'
      }
    },
    className: {
      control: {
        type: 'text'
      }
    },
    onClick: { action: 'onClick' }
  }
} as Meta;

/**
 * A story that displays a button example
 *
 * @param props the story props
 * @param props.size the size property set on controls
 * @param props.variant the variant property set on controls
 * @param props.border the border property set on controls
 * @param props.color the color property set on controls
 * @param props.content the content property set on controls
 * @param props.chip the chip property set on controls
 * @param props.className the component classes
 */
const Template: Story = ({ size, variant, border, color, content, chip, className, ...props }) => (
  <button
    type="button"
    {...props}
    className={[
      `pui-btn-${size}`,
      `pui-btn-${variant}`,
      `pui-color-${color}`,
      // If any of the border propery is set, add the tailwind border class
      ...(border && border.length > 0 ? [`border-${border}`] : []),
      // If this btn is also a chip, add the chip clas
      ...(chip ? ['pui-chip-btn'] : []),
      // Add remaining classes
      ...(className && className.length > 0 ? [className] : [])
    ].join(' ')}
  >
    {content}
  </button>
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

export const BorderedSecondary = Template.bind({});
BorderedSecondary.args = {
  variant: 'bordered',
  color: 'secondary'
};

export const Dashed = Template.bind({});
Dashed.args = {
  variant: 'bordered',
  border: 'dashed'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

export const Chip = Template.bind({});
Chip.args = {
  chip: true
};

// TODO: Add "With icon"
