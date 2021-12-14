import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProject } from '../../actions/projectActions';
import { deleteAlert, successAlert } from '../alert';

class ProjectItem extends Component {
  onProjectItemDelete = async (id) => {
    const willDelete = await deleteAlert(
      'You are about to delete this project and all its related data!'
    );

    if (willDelete) {
      await this.props.deleteProject(id);
      successAlert('Project was deleted successfuly!');
    }
  };

  render() {
    const { projectName, projectIdentifier, description } = this.props.project;

    return (
      <div className="container project-item">
        <div className="card card-body mb-3 shadow-sm">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">{projectIdentifier}</span>
            </div>

            <div className="col-lg-6 col-md-6 col-8">
              <h4>{projectName}</h4>
              <p>{description}</p>
            </div>

            <div className="col-md-4 d-lg-block">
              <ul className="list-group">
                <Link to={`/projectBoard/${projectIdentifier}`}>
                  <li className="list-group-item rounded board">
                    <i className="bi bi-kanban pe-2"></i>
                    Project Board
                  </li>
                </Link>

                <Link to={`/updateProject/${projectIdentifier}`}>
                  <li className="list-group-item rounded my-1 update">
                    <i className="bi bi-pencil-square pe-2"></i>
                    Update Project
                  </li>
                </Link>

                <li
                  className="list-group-item rounded delete"
                  onClick={() => this.onProjectItemDelete(projectIdentifier)}
                >
                  <i className="bi bi-trash-fill pe-2"></i>
                  Delete Project
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectItem.propTypes = {
  deleteProject: PropTypes.func.isRequired,
};

export default connect(null, { deleteProject })(ProjectItem);
