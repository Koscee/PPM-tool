import React from 'react';

const Select = ({ label, name, value, onInputChange, options = [{}] }) => {
  return (
    <div className="my-3">
      {label || ''}
      <select
        className="form-select form-select-lg"
        aria-label={name}
        name={name}
        value={value}
        onChange={onInputChange}
      >
        {options.map((item) => (
          <option key={item?.value} value={item?.value}>
            {item?.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
