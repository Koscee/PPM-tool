import React from 'react';
import Input from '../formElements/Input';

const RegisterFormFields = (props) => {
  return (
    <>
      <Input type="text" placeholder="Name" name="name" required />

      <Input type="email" placeholder="Email Address" name="email" />

      <Input type="password" placeholder="Password" name="password" />

      <Input type="password" placeholder="Confirm Password" name="password2" />
    </>
  );
};

export default RegisterFormFields;
