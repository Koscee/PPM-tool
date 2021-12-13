import React from 'react';

const BoardColumn = ({ columnName, colorTag, children }) => {
  return (
    <div className="col-md-4 mt-3">
      <div className="text-start mb-3">
        <div style={{ color: 'rgba(82, 77, 97, .8)' }}>
          <h4>{columnName}</h4>
        </div>
        <div
          className="rounded"
          style={{ height: '3px', backgroundColor: `${colorTag}` }}
        />
      </div>
      {children}
    </div>
  );
};

export default BoardColumn;
