import React, { Component } from 'react';
import Form from '../formElements/Form';
import LoginFormFields from './LoginFormFields';

export class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-5 text-center mb-4">Log In</h1>
              <Form>
                <LoginFormFields />
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
