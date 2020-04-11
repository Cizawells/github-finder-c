import React, { Fragment } from "react";

const Alert = ({ alert }) => {
  return (
    <Fragment>
      {alert && (
        <div className={`alert ${alert.type}`}>
          <i className="fas fa-info-circle" /> {alert.message}
        </div>
      )}
    </Fragment>
  );
};

export default Alert;
