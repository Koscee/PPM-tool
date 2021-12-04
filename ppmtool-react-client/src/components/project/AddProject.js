import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject, clearFormErrors } from "../../actions/projectActions";
import Form from "../Form";

class AddProject extends Component {
  initialState = {
    projectName: "",
    projectIdentifier: "",
    description: "",
    start_date: "",
    end_date: "",
    errors: {},
  };

  state = this.initialState;

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({ errors: nextProps.errors });
  //   }
  //   console.log(nextProps.errors);
  // }

  // solves componentWillReceiveProps deprication warning
  static getDerivedStateFromProps(props, state) {
    if (props.errors !== state.errors) {
      return {
        ...state,
        errors: props.errors,
      };
    }

    return null;
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
    };

    this.props.createProject(newProject, this.props.history);
  };

  onFormReset = () => {
    this.props.clearFormErrors();
    this.setState(this.initialState);
  };

  render() {
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-5 text-center">Create Project</h5>
              <hr />
              <Form
                onFormSubmit={this.onFormSubmit}
                onFormReset={this.onFormReset}
                fieldData={this.state}
                onInputChange={this.onInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  clearFormErrors: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

// Maps state which exist in the redux store to this component's props
// which makes this component rerender itself
const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { createProject, clearFormErrors })(
  AddProject
);
