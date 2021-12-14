import classnames from 'classnames';
import React from 'react';

const TextArea = (props) => {
  const { placeholder, name, value, onInputChange, errorMessage } = props;

  return (
    <div className="my-3">
      <textarea
        className={classnames('form-control form-control-lg', {
          'is-invalid': errorMessage,
        })}
        style={{ height: '150px' }}
        placeholder={placeholder}
        name={name}
        value={value || ''}
        onChange={onInputChange}
      ></textarea>
      {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
    </div>
  );
};

export default TextArea;
