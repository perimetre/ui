/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * A helper that adds the same event listener to multiple events in an element.
 *
 * @param element The dom element
 * @param events The list of events the listened should be appended to
 * @param listener The listener callback
 * @param options The addEventListener options
 */
export const addMultipleEventListeners = <T extends HTMLElement, K extends keyof HTMLElementEventMap>(
  element: T,
  events: K[],
  listener: (this: T, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
) =>
  events.forEach((event) =>
    element.addEventListener(event, listener as (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options)
  );

/**
 * A helper that removes the same event listener to multiple events in an element.
 *
 * @param element The dom element
 * @param events The list of events the listened should be appended to
 * @param listener The listener callback
 * @param options The removeEventListener options
 */
export const removeMultipleEventListeners = <T extends HTMLElement, K extends keyof HTMLElementEventMap>(
  element: T,
  events: K[],
  listener: (this: T, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
) =>
  events.forEach((event) =>
    element.removeEventListener(event, listener as (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options)
  );
