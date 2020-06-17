import React from 'react';
import './modal.css';
import { Link } from 'react-router-dom';

const Modal2 = ({ isOpen, close }) => {
  return (
    <React.Fragment>
    {
      isOpen ?
      <React.Fragment>
        <div className="Modal-overlay" onClick={close} />
        <div className="Modal">
          <p className="title">Member registration complete</p>
          <div className="content">
            <p>
            Thank you for registering as a member on the YUM site. You can now use the YUM site as a YUM member.
    	    </p>
          </div>
          <div className="button-wrap">
          <Link to='/YUM_HCI_Project/' >
            <button onClick={close}>Confirm</button>
          </Link>
          </div>
        </div>
      </React.Fragment>
      :
      null
    }</React.Fragment>
  )
}
export default Modal2;