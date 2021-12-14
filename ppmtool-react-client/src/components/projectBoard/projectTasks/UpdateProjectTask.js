import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getProjectTask,
  updateProjectTask,
} from '../../../actions/backlogActions';
import { clearFormErrors } from '../../../actions/projectActions';
import Form from '../../formElements/Form';
import extractStatePropertiesFromObject from '../../helper/filterStateProperties';
import ProjectTaskFormFields from './ProjectTaskFormFields';

class UpdateProjectTask extends Component {
  initialState = {
    id: '',
    projectSequence: '',
    summary: '',
    acceptanceCriteria: '',
    status: '',
    priority: 0,
    dueDate: '',
    projectIdentifier: '',
    created_At: '',
    errors: {},
  };

  state = this.initialState;

  componentDidMount() {
    const { backlog_id, pt_id } = this.props.match.params;
    this.props.getProjectTask(backlog_id, pt_id, this.props.history);
  }

  componentDidUpdate(prevProps) {
    if (this.props.errors !== prevProps.errors) {
      this.setState({ errors: this.props.errors });
    }

    if (this.props.projectTask !== prevProps.projectTask) {
      const formData = extractStatePropertiesFromObject(
        this.state,
        this.props.projectTask
      );
      this.setState(formData);
    }
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { backlog_id, pt_id } = this.props.match.params;
    const formData = extractStatePropertiesFromObject(this.state);

    this.props.updateProjectTask(
      backlog_id,
      pt_id,
      formData,
      this.props.history
    );
  };

  onFormReset = (e) => {
    e.preventDefault();
    this.props.clearFormErrors();

    const initialProjectData = extractStatePropertiesFromObject(
      this.state,
      this.props.projectTask
    );
    this.setState(initialProjectData);
  };

  render() {
    const { backlog_id } = this.props.match.params;

    return (
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link
                to={`/projectBoard/${backlog_id}`}
                className="btn-sm btn-outline-secondary border border-secondary"
              >
                <i className="bi bi-arrow-left-circle"></i>&nbsp; Project Board
              </Link>
              <h4 className="display-5 text-center">Edit Project Task</h4>
              <p className="lead text-center">Project Name + Project Code</p>
              <Form
                onFormSubmit={this.onFormSubmit}
                onFormReset={this.onFormReset}
              >
                <ProjectTaskFormFields
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

UpdateProjectTask.propTypes = {
  clearFormErrors: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  projectTask: PropTypes.object.isRequired,
  updateProjectTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  projectTask: state.backlog.project_task,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  getProjectTask,
  clearFormErrors,
  updateProjectTask,
})(UpdateProjectTask);
