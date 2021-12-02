import React, { Component } from "react";
import classnames from "classnames";

class Input extends Component {
  render() {
    const {
      label,
      type,
      placeholder,
      name,
      value,
      onInputChange,
      errorMessage,
    } = this.props;

    return (
      <div className="my-3">
        {label || ""}
        <input
          type={type}
          className={classnames("form-control form-control-lg", {
            "is-invalid": errorMessage,
          })}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onInputChange}
        />
        {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
      </div>
    );
  }
}

export default Input;
