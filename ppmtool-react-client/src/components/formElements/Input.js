import classnames from 'classnames';
import React from 'react';

const Input = (props) => {
  const {
    label,
    type,
    placeholder,
    name,
    value,
    onInputChange,
    required,
    disabled,
    errorMessage,
  } = props;

  return (
    <div className="my-3">
      {label || ''}
      <input
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': errorMessage,
        })}
        placeholder={placeholder}
        name={name}
        value={value || ''}
        onChange={onInputChange}
        required={required}
        disabled={disabled}
      />
      {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
    </div>
  );
};
export default Input;
