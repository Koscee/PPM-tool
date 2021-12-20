import React from 'react';

const FormActionButtons = ({ resetButton }) => {
  return (
    <div className="row my-4">
      {resetButton && (
        <div className="col-6">
          <input
            type="reset"
            value="Reset"
            className="btn btn-reset bg-gradient w-100 py-2"
          />
        </div>
      )}

      <div className={resetButton ? 'col-6 me-auto' : ''}>
        <input
          type="submit"
          value="Submit"
          className="btn btn-purple-main bg-gradient w-100 py-2"
        />
      </div>
    </div>
  );
};

export default FormActionButtons;
