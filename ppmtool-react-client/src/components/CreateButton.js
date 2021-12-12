import React from 'react';
import { Link } from 'react-router-dom';

const CreateButton = ({ href, text }) => {
  return (
    <React.Fragment>
      <Link
        to={href}
        className="btn btn-lg btn-purple bg-gradient py-1 fs-5 shadow-sm"
      >
        <i className="fa fa-plus-circle"> </i>
        &nbsp;{text}
      </Link>
    </React.Fragment>
  );
};

export default CreateButton;
