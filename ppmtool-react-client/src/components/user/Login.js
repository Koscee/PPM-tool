import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/securityActions';
import Form from '../formElements/Form';
import extractStatePropertiesFromObject from '../helper/filterStateProperties';
import LoginFormFields from './LoginFormFields';

export class Login extends Component {
  initialState = {
    username: '',
    password: '',
    errors: {},
  };

  state = this.initialState;

  componentDidUpdate(prevProps) {
    if (this.props.errors !== prevProps.errors) {
      this.setState({ errors: this.props.errors });
    }

    if (this.props.security.validToken) {
      this.props.history.push('/dashboard');
    }
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const loginRequest = extractStatePropertiesFromObject(this.state);

    this.props.login(loginRequest);
  };

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-5 text-center mb-4">Log In</h1>
              <Form onFormSubmit={this.onFormSubmit}>
                <LoginFormFields
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
  errors: state.errors,
});

export default connect(mapStateToProps, { login })(Login);
