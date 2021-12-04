import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteProject } from "../../actions/projectActions";

class ProjectItem extends Component {
  onProjectItemDelete = (id) => {
    this.props.deleteProject(id);
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
              <h3>{projectName}</h3>
              <p>{description}</p>
            </div>

            <div className="col-md-4 d-lg-block">
              <ul className="list-group">
                <a href="#">
                  <li className="list-group-item board">
                    <i className="fa fa-tasks pe-1">&nbsp; Project Board</i>
                  </li>
                </a>

                <Link to={`/updateProject/${projectIdentifier}`}>
                  <li className="list-group-item update">
                    <i className="fa fa-edit pe-1">&nbsp; Update Project</i>
                  </li>
                </Link>

                <li
                  className="list-group-item delete"
                  onClick={() => this.onProjectItemDelete(projectIdentifier)}
                >
                  <i className="fa fa-trash-alt pe-1">&nbsp; Delete Project</i>
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
