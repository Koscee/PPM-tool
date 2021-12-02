import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProjects } from "../actions/projectActions";
import CreateProjectButton from "./project/CreateProjectButton";
import ProjectItem from "./project/ProjectItem";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
    console.log(this.props);
  }

  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-5 text-center">Projects</h1>
              <br />
              <CreateProjectButton />
              <br />
              <hr />
              <ProjectItem />
              <ProjectItem />
              <ProjectItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getProjects: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  projects: state.project.projects,
});

export default connect(mapStateToProps, { getProjects })(Dashboard);
