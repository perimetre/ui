import { faFileUpload, faHandRock, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { addMultipleEventListeners, removeMultipleEventListeners } from '../../utils/dom';
import { AttentionIcon, CrossIcon } from '../Icons';
import { defaultDragFileUploadTranslations, DragFileUploadTranslations } from './translations';

export type DragFileUploadInputRef = { reset: () => void };

export type DragFileUploadInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'id'> & {
  /**
   * The input id
   */
  id: string;
  /**
   * The handler for when one or more files are selected
   */
  onChange?: (files?: FileList | null) => void;
  /**
   * The handler for when an invalid file is selected
   */
  onError?: (error: 'bigFileSize' | 'wrongFileType') => void;
  /**
   * The handler for when the content is cleared
   */
  onReset?: () => void;
  /**
   * The maximum allowed size for the file(in bytes).
   *
   * 1kb = 1024
   */
  sizeInBytes?: number;
  /**
   * If provided, displays a help text under the input
   */
  help?: string;
  /**
   * The error text to replace the help text with
   */
  error?: string;
  /**
   * Shows a success status
   */
  success?: boolean;
  /**
   * Shows a loading status
   */
  loading?: boolean;
  /**
   * The translation object
   */
  translations?: DragFileUploadTranslations;
  /**
   * The initial description to show in the input when it is loaded
   */
  initialFilesDescription?: string;
};

export const DragFileUploadInput = forwardRef<DragFileUploadInputRef, DragFileUploadInputProps>(
  (
    {
      id,
      help,
      error: errorProps,
      success,
      loading,
      onChange: onChangeProps,
      accept,
      sizeInBytes,
      onError,
      onReset: onResetProps,
      translations: translationsProps,
      initialFilesDescription,
      ...props
    }: DragFileUploadInputProps,
    ref
  ) => {
    // I specifically don't want to update the translations on every update
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const translations = useMemo(() => ({ ...defaultDragFileUploadTranslations, ...translationsProps }), []);

    // Create a state for whether or not the user can drag with current browser
    const [hasDragSupport, setHasDragSupport] = useState<boolean | undefined>();

    // Create a state for whether or not the user is currently dragging
    const [isDragging, setIsDragging] = useState(false);

    const [filesDescription, setFilesDescription] = useState<string | undefined>(initialFilesDescription);
    const [error, setError] = useState<string | undefined>();

    // Create a reference of the container element
    const labelRef = useRef<null | HTMLLabelElement>(null);
    const inputRef = useRef<null | HTMLInputElement>(null);

    const onReset = useCallback(() => {
      if (onResetProps) {
        onResetProps();
      }

      if (onChangeProps) {
        onChangeProps(undefined);
      }

      setFilesDescription(undefined);
      setError(undefined);

      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }, [inputRef, onChangeProps, onResetProps]);

    const onChange = useCallback(
      (files?: FileList | null) => {
        // If there are files
        if (files && files.length > 0) {
          let isFileTypeAccepted = true;

          // If there's an accept property
          if (accept) {
            // Get the property possible options
            const acceptOptions = accept.split(',').map((x) => x.trim());

            // For each file
            for (let index = 0; index < files.length; index++) {
              // If the file type is not in the array of accepted types
              if (!acceptOptions.some((option) => files[index].type === option)) {
                // Break the loop
                isFileTypeAccepted = false;
                break;
              }
            }
          }

          // If the file type is accepted
          if (isFileTypeAccepted) {
            let fileSizeAccepted = true;

            // If there's a size property
            if (sizeInBytes) {
              // For each file
              for (let index = 0; index < files.length; index++) {
                // If the file size is bigger than the given size
                if (files[index].size > sizeInBytes) {
                  // Break the loop
                  fileSizeAccepted = false;
                  break;
                }
              }
            }

            // If the file size is accepted
            if (fileSizeAccepted) {
              // Call the callback
              if (onChangeProps) {
                onChangeProps(files);
              }

              // Clear the error
              setError(undefined);

              // Update the file name text
              setFilesDescription(
                files.length > 1
                  ? translations.multipleFilesSelected(files.length)
                  : files[0]
                  ? files[0].name
                  : // Ideally should never get here
                    translations.multipleFilesSelected(1)
              );
            } else {
              // If file size is not accepted

              // Reset file name text
              setFilesDescription(undefined);

              // Reset the input
              if (inputRef.current) {
                inputRef.current.value = '';
              }

              // Update the error message
              setError('bigFileSize');

              // Call the error callback
              if (onError) {
                onError('bigFileSize');
              }
            }
          } else {
            // If file type is not accepted

            // Reset file name text
            setFilesDescription(undefined);

            // Reset the input
            if (inputRef.current) {
              inputRef.current.value = '';
            }

            // Update the error message
            setError('wrongFileType');

            // Call the error callback
            if (onError) {
              onError('wrongFileType');
            }
          }
        } else {
          // If no file was given
          // Reset everything
          onReset();
        }
      },
      [accept, onChangeProps, onError, onReset, sizeInBytes, translations]
    );

    // The handler for the default input change
    const onInputChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          onChange(event.target.files);
        }
      },
      [onChange]
    );

    useEffect(() => {
      // Grab the container element
      const element = labelRef.current;

      // If has drag support
      if (element && hasDragSupport) {
        /**
         * A function to prevent all default events
         *
         * @param e the element event
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const prevent = (e: any) => {
          e.preventDefault();
          e.stopPropagation();
        };

        /**
         * The function to be used on drag enter events
         */
        const onDragEnter = () => {
          setIsDragging(true);
        };

        /**
         * The function to be used on drag leave events
         */
        const onDragLeave = () => {
          setIsDragging(false);
        };

        /**
         * The function to be used on drag leave events
         *
         * @param e The drag event
         */
        const onDragComplete = (e: DragEvent) => {
          if (onChange) {
            onChange(e.dataTransfer?.files);
          }
        };

        // Start binding events

        // For all drag events
        addMultipleEventListeners(
          element,
          ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'],
          prevent,
          false
        );

        // On drag enter events
        addMultipleEventListeners(element, ['dragover', 'dragenter'], onDragEnter, false);

        // On drag leave events
        addMultipleEventListeners(element, ['dragleave', 'dragend', 'drop'], onDragLeave, false);

        // When a file is actually dropped
        element.addEventListener('drop', onDragComplete, false);

        // Provides a dispose function
        return () => {
          // If a component is unmounted
          // Remove existing bound events

          removeMultipleEventListeners(
            element,
            ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'],
            prevent
          );
          removeMultipleEventListeners(element, ['dragover', 'dragenter'], onDragEnter);
          removeMultipleEventListeners(element, ['dragleave', 'dragend', 'drop'], onDragLeave);
          element.removeEventListener('drop', onDragComplete);
        };
      } else if (window !== undefined && element && hasDragSupport === undefined) {
        // If we're on client side, and hasDragSupport has not been set
        // Update the state with a check of whether or not has drag support
        setHasDragSupport('draggable' in element || ('ondragstart' in element && 'ondrop' in element));
      }

      // Provides a dispose function
      return () => {
        // If a component is unmounted
        // Do nothing
      };
    }, [labelRef, hasDragSupport, onChange]);

    // Extends the ref
    useImperativeHandle(
      ref,
      () => ({
        reset: onReset
      }),
      [onReset]
    );

    return (
      <div className="pui-drag-file-container">
        <div
          className={classnames('relative', {
            'pui-drag-file-error': !!error || errorProps,
            'pui-drag-file-success': success,
            'pui-drag-file-loading': loading,
            hideStatusIcon: error || !!filesDescription
          })}
        >
          <label
            htmlFor={id}
            ref={labelRef}
            className={classnames('pui-drag-file-label', {
              disabled: props.disabled
              // dragging: isDragging,
              // error: !!error
            })}
          >
            <div className="pui-drag-file-content">
              {error ? (
                <>
                  <AttentionIcon className="w-6 h-6 text-pui-error" />
                  <p className="pui-drag-file-text text-pui-error pui-animate-fadeIn">{translations[error]}</p>
                </>
              ) : filesDescription ? (
                <>
                  <FontAwesomeIcon icon={faFileUpload} className="pui-animate-fadeIn" size="2x" />
                  <p className="pui-drag-file-text pui-animate-fadeIn">{filesDescription}</p>
                </>
              ) : hasDragSupport ? (
                isDragging ? (
                  <>
                    <FontAwesomeIcon
                      icon={faHandRock}
                      className="pui-animate-scaleHover-target pui-animate-fadeIn"
                      size="2x"
                    />
                    <p className="pui-drag-file-text pui-animate-fadeIn">{translations.dropConfirm}</p>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon
                      icon={faUpload}
                      className="pui-animate-scaleHover-target pui-animate-fadeIn"
                      size="2x"
                    />
                    <p className="pui-drag-file-text pui-animate-fadeIn">{translations.hasDragSupportDescription}</p>
                  </>
                )
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faUpload}
                    className="pui-animate-scaleHover-target pui-animate-fadeIn"
                    size="2x"
                  />
                  <p className="pui-drag-file-text pui-animate-fadeIn">{translations.noDragSupportDescription}</p>
                </>
              )}
            </div>
          </label>
          <input
            ref={inputRef}
            id={id}
            type="file"
            accept={accept}
            onChange={onInputChange}
            {...props}
            className="pui-drag-file-input"
          />
          {!props.disabled && (filesDescription || error) && (
            <button
              type="button"
              className={classnames('pui-drag-file-close-icon', {
                'text-pui-paragraph-500': !error,
                'text-pui-error': !!error
              })}
              onClick={onReset}
            >
              <CrossIcon className="h-6 w-6 pui-animate-scaleHover-target" />
            </button>
          )}
        </div>
        {help && !errorProps && <p className="pui-help-text-input">{help}</p>}
        {errorProps && <p className="pui-animate-fadeDown pui-help-text-input text-pui-error">{errorProps}</p>}
      </div>
    );
  }
);
