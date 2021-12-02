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

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id, this.props.history);
  }

  // runs before render at ever rerender
  static getDerivedStateFromProps(props, state) {
    // this check if there is a project in d props and its id is not equal the id of the state
    if (props.project.id && props.project.id !== state.id) {
      let formData = {};

      /** filters project data by mapping the state's object keys
       * with project object excluding the errors object
       */
      for (const key in state) {
        if (key !== "errors") {
          formData[key] = props.project[key];
        }
      }
      return formData;
    }

    return null;
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

UpdateProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  clearFormErrors: PropTypes.func.isRequired,
  getProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project.project,
});

export default connect(mapStateToProps, {
  createProject,
  clearFormErrors,
  getProject,
})(UpdateProject);
