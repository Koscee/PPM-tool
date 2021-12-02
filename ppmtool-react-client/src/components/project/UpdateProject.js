import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  createProject,
  clearFormErrors,
  getProject,
} from "../../actions/projectActions";
import Form from "../Form";

class UpdateProject extends Component {
  initialState = {
    id: "",
    projectName: "",
    projectIdentifier: "",
    description: "",
    start_date: "",
    end_date: "",
    errors: {},
  };

  state = this.initialState;

  extractStatePropertiesFromObject(object) {
    let newObject = {};

    /** filters data by mapping the state's object keys
     * with another object excluding the errors property
     */
    for (const key in this.state) {
      if (key !== "errors") {
        newObject[key] = object[key];
      }
    }
    return newObject;
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id, this.props.history);
  }

  // fixed issues caused using getStateDerivedFromProps
  componentDidUpdate(prevProps) {
    if (this.props.errors !== prevProps.errors) {
      this.setState({ errors: this.props.errors });
    }

    if (this.props.project !== prevProps.project) {
      const formData = this.extractStatePropertiesFromObject(
        this.props.project
      );
      this.setState(formData);
    }
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      id: this.state.id,
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
    const initialProjectData = this.extractStatePropertiesFromObject(
      this.props.project
    );
    this.setState(initialProjectData);
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

UpdateProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  clearFormErrors: PropTypes.func.isRequired,
  getProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project.project,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  createProject,
  clearFormErrors,
  getProject,
})(UpdateProject);
