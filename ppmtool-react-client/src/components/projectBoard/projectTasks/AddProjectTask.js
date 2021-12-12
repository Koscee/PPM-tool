import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProjectTask } from '../../../actions/backlogActions';
import { clearFormErrors } from '../../../actions/projectActions';
import Form from '../../formElements/Form';
import ProjectTaskFormFields from './ProjectTaskFormFields';
class AddProjectTask extends Component {
  initialState = {
    summary: '',
    acceptanceCriteria: '',
    status: '',
    priority: 0,
    dueDate: '',
    projectIdentifier: this.props.match.params.id,
    errors: {},
  };

  state = this.initialState;

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    const newProjectTask = {
      summary: this.state.summary,
      acceptanceCriteria: this.state.acceptanceCriteria,
      status: this.state.status,
      priority: this.state.priority,
      dueDate: this.state.dueDate,
      projectIdentifier: this.state.projectIdentifier,
    };

    this.props.addProjectTask(
      this.state.projectIdentifier,
      newProjectTask,
      this.props.history
    );
  };

  onFormReset = () => {
    this.props.clearFormErrors();
    this.setState(this.initialState);
  };

  render() {
    const { id } = this.props.match.params;

    return (
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link
                to={`/projectBoard/${id}`}
                className="btn-sm btn-outline-secondary border border-secondary"
              >
                <i className="fa fa-arrow-left"></i>&nbsp; Project Board
              </Link>
              <h4 className="display-5 text-center">Add Project Task</h4>
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

AddProjectTask.propTypes = {
  addProjectTask: PropTypes.func.isRequired,
  clearFormErrors: PropTypes.func.isRequired,
};

export default connect(null, { addProjectTask, clearFormErrors })(
  AddProjectTask
);
