// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useEffect, useRef, useState } from 'react';
import { WYSIWYGInput, WYSIWYGInputProps, WYSIWYGInputRef } from '.';

export default {
  title: 'Components/Inputs/WYSIWYG',
  component: WYSIWYGInput,
  argTypes: {
    id: { defaultValue: 'input-id' },
    label: { defaultValue: 'Input' },
    placeholder: {
      defaultValue: 'Type here...',
      control: {
        type: 'text'
      }
    },
    // defaultValue: {
    //   control: {
    //     type: 'text'
    //   }
    // },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    readOnly: {
      control: {
        type: 'boolean'
      }
    },
    className: {
      control: {
        type: 'text'
      }
    },
    onChange: { action: 'onChange' },
    onBlur: { action: 'onBlur' },
    onFocus: { action: 'onFocus' }
  }
} as Meta;

/**
 * A story that displays a WYSIWYGInput example
 *
 * @param props the story props
 * @param props.content  the content property set on controls
 * @param props.className the component classes
 */
const Template: Story<WYSIWYGInputProps & { content?: string; className?: string }> = ({ ...props }) => {
  const [htmlContent, setHtmlContent] = useState('');
  const inputRef = useRef<WYSIWYGInputRef | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => setHtmlContent(inputRef?.current?.getSanitizedHtml() || ''), 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <WYSIWYGInput ref={inputRef} {...props} />
      <div>{htmlContent}</div>
      <div className="min-w-full" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export const WYSIWYG = Template.bind({});

export const WithHelp = Template.bind({});
WithHelp.args = {
  help: 'You can also have a help text'
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'Input is required'
};
