import React from 'react';
import FormActionButtons from './FormActionButtons';

const Form = (props) => {
  const { onFormSubmit, onFormReset, submitBtnTxt, children } = props;

  return (
    <form onSubmit={onFormSubmit} onReset={onFormReset}>
      {{ ...children }}
      <FormActionButtons
        submitBtnTxt={submitBtnTxt}
        resetButton={onFormReset ? true : false}
      />
    </form>
  );
};

export default Form;
