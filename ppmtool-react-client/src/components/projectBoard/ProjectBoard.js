import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBacklog } from '../../actions/backlogActions';
import CreateButton from '../CreateButton';
import Backlog from './Backlog';

class ProjectBoard extends Component {
  state = { errors: {} };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBacklog(id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.errors !== prevProps.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  renderBoardContents = (errors, project_tasks) => {
    const displayErrorMssg = () => (
      <div className="alert alert-danger text-center h4 fw-normal" role="alert">
        {errors.projectNotFound}
      </div>
    );

    const displayEmptyBoardMssg = () => (
      <div
        className="alert text-center text-secondary h4 fw-normal"
        role="alert"
      >
        No Project Task on this board
      </div>
    );

    if (project_tasks.length < 1) {
      return errors.projectNotFound
        ? displayErrorMssg()
        : displayEmptyBoardMssg();
    } else {
      return <Backlog projectTasks={project_tasks} />;
    }
  };

  render() {
    const { id } = this.props.match.params;
    const { project_tasks } = this.props.backlog;
    const { errors } = this.state;

    const boardContent = this.renderBoardContents(errors, project_tasks);

    return (
      <div className="container">
        <br />
        <CreateButton href={`/addProjectTask/${id}`} text="New Project Task" />
        <br />

        <hr />
        {boardContent}
      </div>
    );
  }
}

ProjectBoard.propTypes = {
  getBacklog: PropTypes.func.isRequired,
  backlog: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  backlog: state.backlog,
  errors: state.errors,
});

export default connect(mapStateToProps, { getBacklog })(ProjectBoard);
