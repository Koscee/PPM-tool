import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProjectTask } from '../../../actions/backlogActions';
import { clearFormErrors } from '../../../actions/projectActions';
import Form from '../../formElements/Form';
import extractStatePropertiesFromObject from '../../helper/filterStateProperties';
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
    const newProjectTask = extractStatePropertiesFromObject(this.state);

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
                <i className="bi bi-arrow-left-circle"></i>&nbsp; Project Board
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
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { addProjectTask, clearFormErrors })(
  AddProjectTask
);
