import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleBlur = prop => event => {
    if (event.target.value === '') {
      setErrors({
        ...errors,
        errors: {
          [prop]: `Por favor ingresa tu ${event.target.name}`,
        }
      });
      console.log(errors)
    } else {
      setValues({ ...values, [prop.message]: '', [prop.error]: false });
    }
  };

  return {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;
