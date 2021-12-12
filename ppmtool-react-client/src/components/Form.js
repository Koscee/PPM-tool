import React, { Component } from 'react';
import FormActionButtons from './FormActionButtons';
import Input from './Input';
import TextArea from './TextArea';

class Form extends Component {
  render() {
    const {
      isUpdateForm,
      fieldData,
      onInputChange,
      onFormSubmit,
      onFormReset,
    } = this.props;

    return (
      <form onSubmit={onFormSubmit} onReset={onFormReset}>
        <Input
          type="text"
          placeholder="Project Name"
          name="projectName"
          value={fieldData.projectName}
          onInputChange={onInputChange}
          errorMessage={fieldData.errors.projectName}
        />

        <Input
          type="text"
          placeholder="Unique Project ID"
          name="projectIdentifier"
          value={fieldData.projectIdentifier}
          onInputChange={onInputChange}
          disabled={isUpdateForm || false}
          errorMessage={fieldData.errors.projectIdentifier}
        />

        <Input
          label={<h6 className="text-secondary">Start Date</h6>}
          type="date"
          name="start_date"
          value={fieldData.start_date}
          onInputChange={onInputChange}
        />

        <Input
          label={<h6 className="text-secondary">Estimated End Date</h6>}
          type="date"
          name="end_date"
          value={fieldData.end_date}
          onInputChange={onInputChange}
        />

        <TextArea
          placeholder="Project Description"
          name="description"
          value={fieldData.description}
          onInputChange={onInputChange}
          errorMessage={fieldData.errors.description}
        />

        <FormActionButtons />
      </form>
    );
  }
}

export default Form;
