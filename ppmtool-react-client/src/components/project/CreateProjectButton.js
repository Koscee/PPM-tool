import React from "react";
import { Link } from "react-router-dom";

const CreateProjectButton = () => {
  return (
    <React.Fragment>
      <Link
        to="/addProject"
        className="btn btn-lg btn-purple bg-gradient py-1 fs-5 shadow-sm"
      >
        <i className="fa fa-plus-circle"> </i>
        &nbsp;New Project
      </Link>
    </React.Fragment>
  );
};

export default CreateProjectButton;
