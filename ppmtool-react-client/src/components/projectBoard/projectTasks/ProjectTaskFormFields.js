import React from 'react';
import Input from '../../formElements/Input';
import Select from '../../formElements/Select';
import TextArea from '../../formElements/TextArea';

const ProjectTaskFormFields = (props) => {
  const { fieldData, onInputChange } = props;

  return (
    <>
      <Input
        type="text"
        name="summary"
        placeholder="Project Task summary"
        value={fieldData.summary}
        onInputChange={onInputChange}
        errorMessage={fieldData.errors.summary}
      />

      <Select
        label={<h6 className="text-secondary">Priority</h6>}
        name="priority"
        value={fieldData.priority}
        onInputChange={onInputChange}
        options={[
          { text: 'Select Priority', value: 0 },
          { text: 'High', value: 1 },
          { text: 'Medium', value: 2 },
          { text: 'Low', value: 3 },
        ]}
      />

      <Select
        label={<h6 className="text-secondary">Status</h6>}
        name="status"
        value={fieldData.status}
        onInputChange={onInputChange}
        options={[
          { text: 'Select Status', value: '' },
          { text: 'TO DO', value: 'TO_DO' },
          { text: 'IN PROGRESS', value: 'IN_PROGRESS' },
          { text: 'DONE', value: 'DONE' },
        ]}
      />

      <Input
        label={<h6 className="text-secondary">Due Date</h6>}
        type="date"
        name="dueDate"
        value={fieldData.dueDate}
        onInputChange={onInputChange}
      />

      <TextArea
        placeholder="Acceptance Criteria"
        name="acceptanceCriteria"
        value={fieldData.acceptanceCriteria}
        onInputChange={onInputChange}
        errorMessage={fieldData.errors.acceptanceCriteria}
      />
    </>
  );
};

export default ProjectTaskFormFields;
