import React, { Component } from 'react';
import Form from '../formElements/Form';
import RegisterFormFields from './RegisterFormFields';

export class Register extends Component {
  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-5 text-center">Sign Up</h1>
              <p className="lead text-center mb-4">Create your Account</p>
              <Form>
                <RegisterFormFields />
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
