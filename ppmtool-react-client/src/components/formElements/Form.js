import React, { Component } from 'react';
import FormActionButtons from './FormActionButtons';

class Form extends Component {
  render() {
    const { onFormSubmit, onFormReset, children } = this.props;

    return (
      <form onSubmit={onFormSubmit} onReset={onFormReset}>
        {{ ...children }}
        <FormActionButtons />
      </form>
    );
  }
}

export default Form;
