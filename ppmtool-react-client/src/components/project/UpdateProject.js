import React, { Component } from "react";
import Form from "../Form";

class UpdateProject extends Component {
  initialState = {
    projectName: "",
    projectIdentifier: "",
    description: "",
    start_date: "",
    end_date: "",
    errors: {},
  };

  state = this.initialState;

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
    };
    console.log(newProject);
  };

  onFormReset = () => {
    this.setState(this.initialState);
  };

  render() {
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-5 text-center">Update Project</h5>
              <hr />
              <Form
                isUpdateForm
                onFormSubmit={this.onFormSubmit}
                onFormReset={this.onFormReset}
                fieldData={this.state}
                onInputChange={this.onInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateProject;
