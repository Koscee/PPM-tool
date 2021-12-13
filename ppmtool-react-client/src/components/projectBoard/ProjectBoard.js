import React, { Component } from 'react';
import CreateButton from '../CreateButton';
import Backlog from './Backlog';

class ProjectBoard extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <div className="container">
        <br />
        <CreateButton href={`/addProjectTask/${id}`} text="New Project Task" />
        <br />

        <hr />
        <Backlog />
      </div>
    );
  }
}

export default ProjectBoard;
