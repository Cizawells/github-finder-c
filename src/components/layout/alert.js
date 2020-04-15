import React, { Fragment, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    <Fragment>
      {alert && (
        <div className={`alert ${alert.type}`}>
          <i className="fas fa-info-circle" /> {alert.msg}
        </div>
      )}
    </Fragment>
  );
};

export default Alert;
