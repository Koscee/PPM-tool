import React, { Component } from 'react';
import BoardColumn from './BoardColumn';
import ProjectTask from './projectTasks/ProjectTask';

class Backlog extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <BoardColumn columnName="TO DO" headerStyle="bg-secondary">
            <ProjectTask />
          </BoardColumn>

          <BoardColumn columnName="In Progress" headerStyle="bg-primary">
            <ProjectTask />
            <ProjectTask />
            <ProjectTask />
          </BoardColumn>

          <BoardColumn columnName="Done" headerStyle="bg-success">
            <ProjectTask />
          </BoardColumn>
        </div>
      </div>
    );
  }
}

export default Backlog;
