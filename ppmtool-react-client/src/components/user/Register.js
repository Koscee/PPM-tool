import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearFormErrors } from '../../actions/projectActions';
import { createNewUser } from '../../actions/securityActions';
import Form from '../formElements/Form';
import extractStatePropertiesFromObject from '../helper/filterStateProperties';
import RegisterFormFields from './RegisterFormFields';

export class Register extends Component {
  initialState = {
    username: '',
    fullName: '',
    password: '',
    confirmPassword: '',
    errors: {},
  };

  state = this.initialState;

  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push('/dashboard');
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.errors !== prevProps.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const newUser = extractStatePropertiesFromObject(this.state);

    this.props.createNewUser(newUser, this.props.history);
  };

  onFormReset = () => {
    this.props.clearFormErrors();
    this.setState(this.initialState);
  };

  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-5 text-center">Sign Up</h1>
              <p className="lead text-center mb-4">Create your Account</p>
              <Form
                submitBtnTxt="Sign up"
                onFormSubmit={this.onFormSubmit}
                onFormReset={this.onFormReset}
              >
                <RegisterFormFields
                  fieldData={this.state}
                  onInputChange={this.onInputChange}
                />
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  clearFormErrors: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  security: state.security,
});

export default connect(mapStateToProps, { createNewUser, clearFormErrors })(
  Register
);
