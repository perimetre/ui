import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { colorOptions } from '../../prebuiltTailwindTheme';

export default {
  title: 'Example/Button',
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
        options: ['dashed', 'dotted', 'double', 'none']
      }
    },
    color: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: colorOptions
      }
    }
  }
} as Meta;

/**
 * @param root0
 * @param root0.size
 * @param root0.variant
 * @param root0.border
 * @param root0.color
 */
const Template: Story = ({ size, variant, border, color, ...props }) => (
  <button
    type="button"
    {...props}
    className={[
      // If the size is equals to 'default', do not set any size, if not set a size
      `pui-btn-${size}`,
      `pui-btn-${variant}`,
      `pui-color-${color}`,
      ...(border && border.length > 0 ? [`border-${border}`] : [])
    ].join(' ')}
  >
    Button
  </button>
);

export const Primary = Template.bind({});
// Primary.args = {
//   // variant: 'default',
//   // className: 'pui-btn-primary'
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   variant: 'default',
//   className: 'pui-btn-primary border-solid'
// };

// export const OutlinePrimary = Template.bind({});
// OutlinePrimary.args = {
//   variant: 'bordered',
//   className: 'pui-btn-primary border-solid'
// };

// export const OutlineSecondary = Template.bind({});
// OutlineSecondary.args = {
//   variant: 'bordered',
//   className: 'pui-btn-secondary border-solid'
// };

// export const DashedPrimary = Template.bind({});
// DashedPrimary.args = {
//   variant: 'bordered',
//   className: 'pui-btn-primary border-dashed'
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   variant: 'default',
//   className: 'pui-button-primary'
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   variant: 'default',
//   className: 'pui-button-primary'
// };
