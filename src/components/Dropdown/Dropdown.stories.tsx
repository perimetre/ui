// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useCallback, useMemo } from 'react';
import { Dropdown, DropdownProps, DropdownItem } from '.';
import { classNameTrim } from '../../utils';
import { AngleDownIcon } from '../Icons';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    placement: {
      defaultValue: 'bottom-start',
      control: {
        type: 'select',
        options: [
          'top',
          'top-start',
          'top-end',
          'right',
          'right-start',
          'right-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'left',
          'left-start',
          'left-end',
          'auto',
          'auto-start',
          'auto-end'
        ]
      }
    },
    content: {
      defaultValue: 'Open',
      control: {
        type: 'text'
      }
    }
  }
} as Meta;

/**
 * A story that displays a drp´dpwm example
 *
 * @param props the story props
 * @param props.text the text property set on controls
 * @param props.content the content property set on controls
 * @param props.text.viewMode The storybook's viewmode
 */
const Template: Story<DropdownProps & { text?: string; content?: string }> = ({ content, ...props }, { viewMode }) => {
  const dropdownContent = useMemo(
    () =>
      Array(6)
        .fill(null)
        .map((_, i) => ({
          id: `content-${i}`,
          content: <a href="/">Link {i + 1}</a>
        })),
    []
  );

  return (
    <div className={classNameTrim(`flex items-center justify-center w-full ${viewMode !== 'docs' ? 'h-5/12vh' : ''}`)}>
      <Dropdown {...props} content={dropdownContent}>
        <>
          <span>{content}</span>
          <AngleDownIcon className="pui-animate-scaleHover-target ml-2" />
        </>
      </Dropdown>
    </div>
  );
};

export const DropdownMenu = Template.bind({});
export const AttachRight = Template.bind({});
AttachRight.args = {
  placement: 'bottom-end'
};

/**
 * A story that displays a drp´dpwm example
 *
 * @param props the story props
 * @param props.text the text property set on controls
 * @param props.content the content property set on controls
 * @param props.text.viewMode The storybook's viewmode
 */
const RichContentTemplate: Story<DropdownProps & { text?: string; content?: string }> = (
  { content, ...props },
  { viewMode }
) => {
  const dropdownHeader = useCallback(
    () => (
      <div className="py-1 px-4">
        Signed in as: <strong>email@perimetre.co</strong>
      </div>
    ),
    []
  );

  const dropdownContent = useMemo(
    () =>
      Array(6)
        .fill(null)
        .map((_, i) => ({
          id: `content-${i}`,
          content:
            i === 2 || i === 5 ? (
              <button
                type="button"
                className="text-left"
                disabled={i === 5}
                onClick={() => alert(`Clicked on button ${i + 1}`)}
              >
                Button {i + 1}
              </button>
            ) : (
              <a href="/">Link {i + 1}</a>
            )
        })),
    []
  );

  const dropdownFooter = useMemo(() => [{ id: 'footer-1', content: <a href="/">Sign out</a> }], []);

  return (
    <div className={classNameTrim(`flex items-center justify-center w-full ${viewMode !== 'docs' ? 'h-5/12vh' : ''}`)}>
      <Dropdown {...props} header={dropdownHeader} content={dropdownContent} footer={dropdownFooter}>
        <>
          <span>{content}</span>
          <AngleDownIcon className="pui-animate-scaleHover-target ml-2" />
        </>
      </Dropdown>
    </div>
  );
};

export const RichContent = RichContentTemplate.bind({});

/**
 * A story that displays a drp´dpwm example
 *
 * @param props the story props
 * @param props.text the text property set on controls
 * @param props.content the content property set on controls
 * @param props.text.viewMode The storybook's viewmode
 */
const RicherContentTemplate: Story<DropdownProps & { text?: string; content?: string }> = (
  { content, ...props },
  { viewMode }
) => {
  const dropdownHeader = useCallback(
    () => (
      <div className="py-1 px-4">
        Signed in as: <strong>email@perimetre.co</strong>
      </div>
    ),
    []
  );

  const dropdownContentItems = useMemo(
    () =>
      Array(2)
        .fill(null)
        .map((_, i) => ({
          id: `content-${i}`,
          content: <a href="/">Link {i + 1}</a>
        })),
    []
  );

  const dropdownContent = useCallback(
    (getLinkList: (list: DropdownItem[]) => void) => (
      <>
        <div className="py-1 px-4">You might want to</div>
        {getLinkList(dropdownContentItems)}
        <div className="py-1 px-4">Append content</div>
        {getLinkList(dropdownContentItems)}
        <div className="py-1 px-4">Between urls</div>
      </>
    ),
    [dropdownContentItems]
  );

  const dropdownFooter = useMemo(() => [{ id: 'footer-1', content: <a href="/">Sign out</a> }], []);

  return (
    <div className={classNameTrim(`flex items-center justify-center w-full ${viewMode !== 'docs' ? 'h-5/12vh' : ''}`)}>
      <Dropdown {...props} header={dropdownHeader} content={dropdownContent} footer={dropdownFooter}>
        <>
          <span>{content}</span>
          <AngleDownIcon className="pui-animate-scaleHover-target ml-2" />
        </>
      </Dropdown>
    </div>
  );
};

export const RicherContent = RicherContentTemplate.bind({});
