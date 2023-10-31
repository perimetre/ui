import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import { SelectStack, SelectStackProps } from '.';

const items = ['Option 1', 'Option 2', 'Option 3'];

export default {
  title: 'Components/Inputs/SelectStack',
  component: SelectStack,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    className: {
      control: {
        type: 'text'
      }
    },
    onClick: { action: 'onClick' }
  },
  args: {
    items
  }
} as Meta;

/**
 * A story that displays a SelectStack example
 * @param props the story props
 * @param props.onClick On click event handler
 */
const Template: StoryFn<SelectStackProps & { onClick?: () => void }> = ({ onClick, ...props }) => {
  const [activeItem, setActiveItem] = useState(items[0]);

  return (
    <SelectStack
      {...props}
      onClick={(item, e) => {
        setActiveItem(item);

        onClick?.(item, e);
      }}
      activeItem={activeItem}
    />
  );
};

export const Default = Template.bind({});
