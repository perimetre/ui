import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { DragFileUploadInput, DragFileUploadInputProps } from '.';

export default {
  title: 'Components/Inputs/DragFileUploadInput',
  component: DragFileUploadInput,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    onError: { action: 'onError' },
    onReset: { action: 'onReset' }
  },
  args: {
    id: 'input-id'
  }
} as Meta;

/**
 * A story that displays a DragFileUploadInput example
 *
 * @param props the story props
 */
const Template: StoryFn<DragFileUploadInputProps> = (props) => <DragFileUploadInput {...props} />;

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

export const PreviewContent = Template.bind({});
PreviewContent.args = {
  initialFilesDescription: 'cat.png',
  previewSrc: 'https://cataas.com/cat',
  previewClassName: 'max-h-64',
  previewLoaderClassName: 'h-64 w-72'
};
