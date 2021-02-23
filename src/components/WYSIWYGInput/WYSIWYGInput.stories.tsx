// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useRef, useState } from 'react';
import { WYSIWYGInput, WYSIWYGInputProps, WYSIWYGInputRef } from '.';
import { Button } from '../Button';

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
const Template: Story<WYSIWYGInputProps & { content?: string; className?: string }> = ({ ...props }) => (
  // Clear the onHtmlChangeSlow event that storybook provides automatically because it's slow
  <WYSIWYGInput {...props} onHtmlChangeSlow={undefined} />
);

export const WYSIWYG = Template.bind({});

export const WithHelp = Template.bind({});
WithHelp.args = {
  help: 'You can also have a help text'
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'Input is required'
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  defaultHtmlValue:
    '<p>Lorem&nbsp;ipsum&nbsp;dolor,&nbsp;sit&nbsp;amet&nbsp;consectetur&nbsp;adipisicing&nbsp;elit.&nbsp;Atque&nbsp;quaerat,&nbsp;minus&nbsp;suscipit&nbsp;totam&nbsp;nam&nbsp;sequi&nbsp;hic&nbsp;expedita&nbsp;quae&nbsp;fugit&nbsp;blanditiis&nbsp;ad&nbsp;voluptate&nbsp;eligendi&nbsp;adipisci.&nbsp;Quaerat&nbsp;similique&nbsp;numquam&nbsp;corporis&nbsp;molestias,&nbsp;blanditiis&nbsp;enim&nbsp;saepe&nbsp;accusamus&nbsp;debitis&nbsp;ipsa&nbsp;provident&nbsp;cumque&nbsp;voluptatum&nbsp;dolor&nbsp;beatae&nbsp;odit,&nbsp;odio&nbsp;ipsum&nbsp;maiores!&nbsp;Reiciendis,&nbsp;debitis&nbsp;fugiat&nbsp;consequuntur&nbsp;ex&nbsp;quae&nbsp;necessitatibus&nbsp;laboriosam&nbsp;sit&nbsp;quas&nbsp;et&nbsp;nam!&nbsp;Maxime,&nbsp;necessitatibus&nbsp;velit&nbsp;veniam,&nbsp;assumenda&nbsp;minima&nbsp;soluta,&nbsp;molestias&nbsp;rem&nbsp;eos&nbsp;harum&nbsp;reiciendis&nbsp;tempore&nbsp;consequatur?&nbsp;Vel&nbsp;quos&nbsp;similique&nbsp;rem,&nbsp;delectus&nbsp;maiores&nbsp;inventore&nbsp;quisquam&nbsp;ab&nbsp;asperiores&nbsp;explicabo&nbsp;accusantium&nbsp;quas&nbsp;doloribus&nbsp;iusto&nbsp;dolorem&nbsp;repellat.&nbsp;Necessitatibus&nbsp;repellendus&nbsp;consectetur&nbsp;hic&nbsp;autem&nbsp;perspiciatis&nbsp;voluptatibus,&nbsp;eius&nbsp;laudantium&nbsp;quas&nbsp;iste,&nbsp;nobis&nbsp;unde?</p> <p></p> <p>Totam&nbsp;numquam&nbsp;sunt&nbsp;iure&nbsp;recusandae&nbsp;harum&nbsp;nihil&nbsp;itaque&nbsp;assumenda&nbsp;facilis&nbsp;in&nbsp;repellat&nbsp;sed&nbsp;sapiente,&nbsp;esse&nbsp;blanditiis&nbsp;fuga&nbsp;aliquid&nbsp;pariatur&nbsp;architecto&nbsp;laboriosam.&nbsp;Id&nbsp;ex&nbsp;temporibus&nbsp;voluptatum&nbsp;maiores,&nbsp;error&nbsp;eveniet&nbsp;totam&nbsp;in&nbsp;ipsa&nbsp;beatae&nbsp;iure&nbsp;obcaecati&nbsp;corrupti,&nbsp;numquam&nbsp;nesciunt&nbsp;ipsum&nbsp;a&nbsp;dicta&nbsp;ad!&nbsp;Veritatis&nbsp;labore&nbsp;cum&nbsp;necessitatibus,&nbsp;a&nbsp;delectus&nbsp;doloremque&nbsp;voluptate&nbsp;ut&nbsp;blanditiis&nbsp;nisi&nbsp;atque&nbsp;soluta&nbsp;repellendus&nbsp;earum&nbsp;fugiat&nbsp;fugit&nbsp;totam&nbsp;harum&nbsp;commodi&nbsp;saepe!&nbsp;Totam&nbsp;qui&nbsp;cumque&nbsp;recusandae&nbsp;beatae&nbsp;unde&nbsp;atque&nbsp;nobis&nbsp;ipsa&nbsp;nihil</p>'
};

/**
 * A story that displays a WYSIWYGInput example
 *
 * @param props the story props
 * @param props.content  the content property set on controls
 * @param props.className the component classes
 */
const HtmlTemplate: Story<WYSIWYGInputProps & { content?: string; className?: string }> = ({ ...props }) => {
  const [htmlContent, setHtmlContent] = useState('');
  const inputRef = useRef<WYSIWYGInputRef | null>(null);

  return (
    <div className="w-full">
      {/* Clear the onHtmlChangeSlow event that storybook provides automatically because it's slow */}
      <WYSIWYGInput ref={inputRef} {...props} onHtmlChangeSlow={undefined} />
      <Button onClick={() => setHtmlContent(inputRef?.current?.getSanitizedHtml() || '')}>Get HTML</Button>
      <div className="min-w-full max-w-full mt-4 prose" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <div className="max-w-full mb-4 border-t border-solid border-gray-300">{htmlContent}</div>
    </div>
  );
};
export const GetHtml = HtmlTemplate.bind({});
