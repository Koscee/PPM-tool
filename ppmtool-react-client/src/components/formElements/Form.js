import React from 'react';
import FormActionButtons from './FormActionButtons';

const Form = (props) => {
  const { onFormSubmit, onFormReset, children } = props;

  return (
    <form onSubmit={onFormSubmit} onReset={onFormReset}>
      {{ ...children }}
      <FormActionButtons />
    </form>
  );
};

export default Form;
