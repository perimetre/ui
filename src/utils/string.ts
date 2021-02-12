/**
 * Trims the string but also trims extra spaces in between
 *
 * @param className the classname string
 */
export const classNameTrim = (className?: string) => {
  // This removes any extra spaces in between too, but a bit slower than just using trim
  // return className?.replace(/\s+/g, ' ').trim();

  // Faster
  return className?.trim();
};
