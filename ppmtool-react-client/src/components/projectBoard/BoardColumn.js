import React from 'react';

const BoardColumn = ({ columnName, headerStyle, children }) => {
  return (
    <div className="col-md-4">
      <div className="card text-center mb-3">
        <div className={`card-header text-white ${headerStyle}`}>
          <h3>{columnName}</h3>
        </div>
      </div>
      {children}
    </div>
  );
};

export default BoardColumn;
