/* eslint-disable jsx-a11y/alt-text */
import classnames from 'classnames';
import React, { useLayoutEffect, useRef, useState } from 'react';

export type ImageLoaderProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
  /**
   * The image alt tag
   */
  alt: string; // Never make "alt" optional.
  /**
   * Class name for the loader
   */
  loaderClassName: string; // Required because the user must provide desired height/width
  /**
   * Class name for the container
   */
  containerClassName?: string;
  /**
   * Options for the intersection observer
   */
  observerOptions?: IntersectionObserverInit;
};

/**
 * Wraps the image tag with a loader placeholder that shows up until the image is loaded
 *
 * @param props The image props
 * @param props.src The image src tag
 * @param props.observerOptions The options for the intersection observer
 * @param props.loaderClassName The class name for the loader
 * @param props.containerClassName The class name for the container
 */
export const ImageLoader: React.FC<ImageLoaderProps> = ({
  src,
  observerOptions,
  loaderClassName,
  containerClassName,
  ...props
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  useLayoutEffect(() => {
    const img = imgRef.current;

    if (!!img) {
      // Creates a new intersection observer to check if the image is visible or not
      // Image only gets loaded if it's in screen
      const observer = new IntersectionObserver(
        () => {
          /**
           * Callback for when the image is loaded
           */
          img.onload = () => setImgLoaded(true);
          img.src = src || '';
        },
        {
          threshold: 0.2, // Only trigger with this threshold
          ...observerOptions
        }
      );

      observer.observe(img);

      return () => {
        observer.unobserve(img);
        observer.disconnect();
      };
    }

    return;
    // Don't need to listen for observerOptions changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgRef, src]);

  return (
    <span className={containerClassName}>
      {!imgLoaded && <div className={classnames('pui-skeleton', loaderClassName)} />}
      <img style={{ display: !imgLoaded ? 'none' : undefined }} ref={imgRef} {...props} />
    </span>
  );
};
