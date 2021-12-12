import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../actions/projectActions';
import CreateButton from './CreateButton';
import ProjectItem from './project/ProjectItem';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  renderProjectItems(projectList) {
    if (projectList.length > 0) {
      return projectList.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ));
    } else {
      return (
        <h6 className="text-center text-secondary">No project in your list!</h6>
      );
    }
  }

  render() {
    const { projects } = this.props;

    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-5 text-center">Projects</h1>
              <br />
              <CreateButton href="/addProject" text="New Project" />
              <br />
              <hr />
              {this.renderProjectItems(projects)}
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

// Maps state which exist in the redux store to this component's props
// which makes this component rerender itself
const mapStateToProps = (state) => ({
  projects: state.project.projects,
});

export default connect(mapStateToProps, { getProjects })(Dashboard);
