import React from 'react';
import Input from '../formElements/Input';

const LoginFormFields = (props) => {
  return (
    <>
      <Input type="email" placeholder="Email Address" name="email" />

      <Input type="password" placeholder="Password" name="password" />
    </>
  );
};

export default LoginFormFields;
