import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBacklog } from '../../actions/backlogActions';
import CreateButton from '../CreateButton';
import Backlog from './Backlog';

class ProjectBoard extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBacklog(id);
  }

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

ProjectBoard.propTypes = {
  getBacklog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  backlog: state.backlog,
});

export default connect(mapStateToProps, { getBacklog })(ProjectBoard);
