import React from 'react';
import Input from '../formElements/Input';
import TextArea from '../formElements/TextArea';

const ProjectFormFields = (props) => {
  const { isDisabled, fieldData, onInputChange } = props;

  return (
    <>
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
        disabled={isDisabled || false}
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
    </>
  );
};

export default ProjectFormFields;
