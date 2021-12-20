import React from 'react';
import FormActionButtons from './FormActionButtons';

const Form = (props) => {
  const { onFormSubmit, onFormReset, children } = props;

  return (
    <form onSubmit={onFormSubmit} onReset={onFormReset}>
      {{ ...children }}
      <FormActionButtons resetButton={onFormReset ? true : false} />
    </form>
  );
};

export default Form;
