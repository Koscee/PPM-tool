import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  clearFormErrors,
  createProject,
  getProject,
} from '../../actions/projectActions';
import Form from '../formElements/Form';
import extractStatePropertiesFromObject from '../helper/filterStateProperties';
import ProjectFormFields from './ProjectFormFields';

class UpdateProject extends Component {
  initialState = {
    id: '',
    projectName: '',
    projectIdentifier: '',
    description: '',
    start_date: '',
    end_date: '',
    created_At: '',
    errors: {},
  };

  state = this.initialState;

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
      const formData = extractStatePropertiesFromObject(
        this.state,
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
    const projectData = extractStatePropertiesFromObject(this.state);

    // the first param is used as a string to construct the success message
    this.props.createProject('update', projectData, this.props.history);
  };

  onFormReset = (e) => {
    e.preventDefault();
    this.props.clearFormErrors();

    const initialProjectData = extractStatePropertiesFromObject(
      this.state,
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
                onFormSubmit={this.onFormSubmit}
                onFormReset={this.onFormReset}
              >
                <ProjectFormFields
                  isDisabled
                  fieldData={this.state}
                  onInputChange={this.onInputChange}
                />
              </Form>
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

// Maps state which exist in the redux store to this component's props
// which makes this component rerender itself
const mapStateToProps = (state) => ({
  project: state.project.project,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  createProject,
  clearFormErrors,
  getProject,
})(UpdateProject);
