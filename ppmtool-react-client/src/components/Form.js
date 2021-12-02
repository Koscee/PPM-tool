import React, { Component } from "react";
import Input from "./Input";
import TextArea from "./TextArea";

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

        <div className="row my-4">
          <div className="col-6">
            <input
              type="reset"
              className="btn btn-reset bg-gradient w-100 py-2"
            />
          </div>

          <div className="col-6 me-auto">
            <input
              type="submit"
              className="btn btn-purple bg-gradient w-100 py-2"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
