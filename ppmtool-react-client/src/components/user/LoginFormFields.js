import React from 'react';
import Input from '../formElements/Input';

const LoginFormFields = (props) => {
  const { fieldData, onInputChange } = props;

  return (
    <>
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
    </>
  );
};

export default LoginFormFields;
