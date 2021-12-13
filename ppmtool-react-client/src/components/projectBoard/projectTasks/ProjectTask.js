import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectTask extends Component {
  render() {
    const { projectSequence, summary, priority, acceptanceCriteria } =
      this.props.projectTask;
    return (
      <div className="card mb-2 bg-light">
        <div className="card-header text-primary">
          ID: {projectSequence} -- Priority: {priority}
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title">{summary}</h5>
          <p className="card-text text-truncate ">{acceptanceCriteria}</p>
          <Link to="" className="btn btn-purple">
            View / Update
          </Link>

          <button className="btn btn-danger ms-4">Delete</button>
        </div>
      </div>
    );
  }
}

export default ProjectTask;
