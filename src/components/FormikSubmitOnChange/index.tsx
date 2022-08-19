import { useFormikContext } from 'formik';
import { debounce } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import fastDeepEqual from 'fast-deep-equal';

/**
 * Helper component that should be placed under the formik. That submits the form when the values change
 */
export const FormikSubmitOnChange: React.FC = () => {
  const { values, initialValues, submitForm, dirty, errors } = useFormikContext();
  const [previousValues, setPreviousValues] = useState<unknown>();

  // Wrap it with a debounced method
  const submit = useMemo(() => debounce(submitForm, 250, { maxWait: 500 }), [submitForm]);

  useEffect(() => {
    const hasErrors = errors && Object.entries(errors).length > 0;
    const didChange = values !== initialValues && !fastDeepEqual(previousValues, values);
    if (!hasErrors && (dirty || didChange)) {
      submit();
      setPreviousValues(values);
    }
  }, [submit, values, initialValues, dirty, errors, previousValues]);

  return null;
};
