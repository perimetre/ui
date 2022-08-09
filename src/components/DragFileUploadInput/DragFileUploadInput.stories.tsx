// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { DragFileUploadInput, DragFileUploadInputProps } from '.';

export default {
  title: 'Components/Inputs/DragFileUploadInput',
  component: DragFileUploadInput,
  argTypes: {
    id: { defaultValue: 'input-id' },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    onError: { action: 'onError' },
    onReset: { action: 'onReset' }
  }
} as Meta;

/**
 * A story that displays a DragFileUploadInput example
 *
 * @param props the story props
 */
const Template: Story<DragFileUploadInputProps> = (props) => <DragFileUploadInput {...props} />;

export const FileUpload = Template.bind({});

export const WithHelp = Template.bind({});
WithHelp.args = {
  help: 'You can also have a help text'
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'Input is required'
};

export const FileSize = Template.bind({});
FileSize.args = {
  sizeInBytes: 1024,
  help: 'Maximum file size of 1MB'
};

export const FileType = Template.bind({});
FileType.args = {
  accept: 'pdf',
  help: 'Only .pdf files allowed'
};

export const InitialDescription = Template.bind({});
InitialDescription.args = {
  initialFilesDescription: 'image.png'
};
