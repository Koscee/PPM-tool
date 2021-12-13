import React, { Component } from 'react';
import BoardColumn from './BoardColumn';
import ProjectTask from './projectTasks/ProjectTask';

class Backlog extends Component {
  // allocate projectTasks to their respective status column
  placeProjectTasksInColumns(projectTasks, column) {
    const { todoItems, inProgressItems, doneItems } = column;

    const tasks = projectTasks.map((projectTask) => (
      <ProjectTask key={projectTask.id} projectTask={projectTask} />
    ));

    tasks.forEach((task) => {
      const { status } = task.props.projectTask;
      switch (status) {
        case 'TO_DO':
          return todoItems.push(task);
        case 'IN_PROGRESS':
          return inProgressItems.push(task);
        case 'DONE':
          return doneItems.push(task);

        default:
          break;
      }
    });
  }

  render() {
    const { projectTasks } = this.props;
    const column = {
      todoItems: [],
      inProgressItems: [],
      doneItems: [],
    };

    this.placeProjectTasksInColumns(projectTasks, column);

    return (
      <div className="container">
        <div className="row">
          <BoardColumn columnName="TO DO" colorTag="rgb(200, 200, 200)">
            {column.todoItems}
          </BoardColumn>

          <BoardColumn columnName="In Progress" colorTag="rgb(71, 26, 145)">
            {column.inProgressItems}
          </BoardColumn>

          <BoardColumn columnName="Done" colorTag="rgb(20, 236, 63)">
            {column.doneItems}
          </BoardColumn>
        </div>
      </div>
    );
  }
}

export default Backlog;
