import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import taskPriority from './projectTaskPriority';

class ProjectTask extends Component {
  render() {
    const { projectSequence, summary, priority, acceptanceCriteria } =
      this.props.projectTask;

    const { styleClass: priorityClass, text: priorityText } =
      taskPriority[`${priority}`];

    return (
      <div className="card mb-2 bg-white shadow-sm task-card">
        <div className="card-header bg-transparent d-flex justify-content-between align-items-center">
          <h6 className="fw-normal text-secondary mb-0">
            ID: {projectSequence}
          </h6>
          <div
            data-bs-placement="top"
            data-bs-toggle="tooltip"
            title={priorityText + ' Priority'}
          >
            <i className={`bi bi-flag-fill ${priorityClass}`}></i>
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title fs-6">{summary}</h5>
          <p className="text-muted text-truncate ">{acceptanceCriteria}</p>
          <Link to="" className="btn btn-sm btn-outline-secondary">
            View / Update
          </Link>
          <span
            className="ms-4 d-inline-block"
            data-bs-placement="auto"
            data-bs-toggle="tooltip"
            title="Delete"
          >
            <i className="bi bi-trash-fill fs-5 red"></i>
          </span>
          {/* <button className="btn btn-sm btn-danger ms-4">Delete</button> */}
        </div>
      </div>
    );
  }
}

export default ProjectTask;
