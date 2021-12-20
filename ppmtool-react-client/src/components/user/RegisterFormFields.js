import React from 'react';
import Input from '../formElements/Input';

const RegisterFormFields = (props) => {
  const { fieldData, onInputChange } = props;

  return (
    <>
      <Input
        type="text"
        placeholder="Full Name"
        name="fullName"
        value={fieldData.fullName}
        onInputChange={onInputChange}
        errorMessage={fieldData.errors.fullName}
      />

      <Input
        type="text"
        placeholder="Email Address"
        name="username"
        value={fieldData.username}
        onInputChange={onInputChange}
        errorMessage={fieldData.errors.username}
      />

      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={fieldData.password}
        onInputChange={onInputChange}
        errorMessage={fieldData.errors.password}
      />

      <Input
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        value={fieldData.confirmPassword}
        onInputChange={onInputChange}
        errorMessage={fieldData.errors.confirmPassword}
      />
    </>
  );
};

export default RegisterFormFields;
