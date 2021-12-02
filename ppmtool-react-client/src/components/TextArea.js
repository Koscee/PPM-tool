import React, { Component } from "react";
import classnames from "classnames";

class TextArea extends Component {
  render() {
    const { placeholder, name, value, onInputChange, errorMessage } =
      this.props;

    return (
      <div className="my-3">
        <textarea
          className={classnames("form-control form-control-lg", {
            "is-invalid": errorMessage,
          })}
          style={{ height: "150px" }}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onInputChange}
        ></textarea>
        {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
      </div>
    );
  }
}

export default TextArea;
