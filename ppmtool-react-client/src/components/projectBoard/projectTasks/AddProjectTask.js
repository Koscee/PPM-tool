import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormActionButtons from '../../FormActionButtons';
class AddProjectTask extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to={`/projectBoard/${id}`} className="btn btn-light">
                Back to Project Board
              </Link>
              <h4 className="display-5 text-center">Add Project Task</h4>
              <p className="lead text-center">Project Name + Project Code</p>
              <form>
                <div className="my-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="summary"
                    placeholder="Project Task summary"
                  />
                </div>

                <div className="my-3">
                  <select
                    className="form-select form-select-lg"
                    aria-label="priority"
                    name="priority"
                  >
                    <option value={0}>Select Priority</option>
                    <option value={1}>High</option>
                    <option value={2}>Medium</option>
                    <option value={3}>Low</option>
                  </select>
                </div>

                <div className="my-3">
                  <select
                    className="form-select form-select-lg"
                    aria-label="priority"
                    name="status"
                  >
                    <option value="">Select Status</option>
                    <option value="TO_DO">TO DO</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="DONE">DONE</option>
                  </select>
                </div>

                <h6>Due Date</h6>
                <div className="my-3">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="dueDate"
                  />
                </div>

                <div className="my-3">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Acceptance Criteria"
                    name="acceptanceCriteria"
                  ></textarea>
                </div>

                <FormActionButtons />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProjectTask;
