type ValueType<T> =
  | T
  | T[]
  | {
      _?: T;
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
      xxl?: T;
    };
export default ValueType;
