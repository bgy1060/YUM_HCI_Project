import React from 'react';
import './log_modal.css';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen, close }) => {
  return (
    <React.Fragment>
    {
      isOpen ?
      <React.Fragment>
        <div className="Modal-overlay" onClick={close} />
        <div className="Modal">
          <p className="title">Login Complete</p>
          <div className="content">
            <p>
            Thank you for visiting the YUM site. Login is complete.
    	    </p>
          </div>
          <div className="button-wrap">
          <Link to='/YUM_HCI_Project/' >
            <button className="login-confirm" onClick={close}>Confirm</button>
          </Link>
          </div>
        </div>
      </React.Fragment>
      :
      null
    }</React.Fragment>
  )
}
export default Modal;