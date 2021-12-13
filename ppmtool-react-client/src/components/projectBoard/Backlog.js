import React, { Component } from 'react';
import BoardColumn from './BoardColumn';
import ProjectTask from './projectTasks/ProjectTask';

class Backlog extends Component {
  render() {
    const { projectTasks } = this.props;

    const tasks = projectTasks.map((projectTask) => (
      <ProjectTask key={projectTask.id} projectTask={projectTask} />
    ));

    return (
      <div className="container">
        <div className="row">
          <BoardColumn columnName="TO DO" headerStyle="bg-secondary">
            {tasks}
          </BoardColumn>

          <BoardColumn
            columnName="In Progress"
            headerStyle="bg-primary"
          ></BoardColumn>

          <BoardColumn columnName="Done" headerStyle="bg-success"></BoardColumn>
        </div>
      </div>
    );
  }
}

export default Backlog;
