import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../actions/projectActions";

class AddProject extends Component {
  initialState = {
    projectName: "",
    projectIdentifier: "",
    description: "",
    start_date: "",
    end_date: "",
  };

  state = this.initialState;

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const newProject = this.state;
    this.props.createProject(newProject, this.props.history);
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
              <h5 className="display-5 text-center">Create Project</h5>

              <hr />

              <form onSubmit={this.onFormSubmit} onReset={this.onFormReset}>
                <div className="my-3">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Project Name"
                    name="projectName"
                    value={this.state.projectName}
                    onChange={this.onInputChange}
                  />
                </div>

                <div className="my-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Unique Project ID"
                    name="projectIdentifier"
                    value={this.state.projectIdentifier}
                    onChange={this.onInputChange}
                  />
                </div>

                <div className="my-3">
                  <h6>Start Date</h6>
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="start_date"
                    value={this.state.start_date}
                    onChange={this.onInputChange}
                  />
                </div>

                <div className="my-3">
                  <h6>Estimated End Date</h6>
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="end_date"
                    value={this.state.end_date}
                    onChange={this.onInputChange}
                  />
                </div>

                <div className="my-3">
                  <textarea
                    className="form-control form-control-lg"
                    style={{ height: "150px" }}
                    placeholder="Project Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onInputChange}
                  ></textarea>
                </div>

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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
};

export default connect(null, { createProject })(AddProject);
