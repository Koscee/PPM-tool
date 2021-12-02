import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject, clearFormErrors } from "../../actions/projectActions";
import Input from "../Input";
import TextArea from "../TextArea";

class AddProject extends Component {
  initialState = {
    projectName: "",
    projectIdentifier: "",
    description: "",
    start_date: "",
    end_date: "",
    errors: {},
  };

  state = this.initialState;

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({ errors: nextProps.errors });
  //   }
  //   console.log(nextProps.errors);
  // }

  // solves componentWillReceiveProps deprication warning
  static getDerivedStateFromProps(props, state) {
    if (props.errors !== state.errors) {
      return {
        ...state,
        errors: props.errors,
      };
    }

    return null;
  }

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

    this.props.createProject(newProject, this.props.history);
  };

  onFormReset = () => {
    this.props.clearFormErrors();
    this.setState(this.initialState);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-5 text-center">Create Project</h5>

              <hr />

              <form onSubmit={this.onFormSubmit} onReset={this.onFormReset}>
                <Input
                  type="text"
                  placeholder="Project Name"
                  name="projectName"
                  value={this.state.projectName}
                  onInputChange={this.onInputChange}
                  errorMessage={errors.projectName}
                />

                <Input
                  type="text"
                  placeholder="Unique Project ID"
                  name="projectIdentifier"
                  value={this.state.projectIdentifier}
                  onInputChange={this.onInputChange}
                  errorMessage={errors.projectIdentifier}
                />

                <Input
                  label={<h6 className="text-secondary">Start Date</h6>}
                  type="date"
                  name="start_date"
                  value={this.state.start_date}
                  onInputChange={this.onInputChange}
                />

                <Input
                  label={<h6 className="text-secondary">Estimated End Date</h6>}
                  type="date"
                  name="end_date"
                  value={this.state.end_date}
                  onInputChange={this.onInputChange}
                />

                <TextArea
                  placeholder="Project Description"
                  name="description"
                  value={this.state.description}
                  onInputChange={this.onInputChange}
                  errorMessage={errors.description}
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  clearFormErrors: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { createProject, clearFormErrors })(
  AddProject
);
