import React from 'react';
import './regi_modal.css';
import { Link } from 'react-router-dom';
const p_style={
  'margin-top' : '6%',
  'margin-bottom' : '7%'
}

const Modal2 = ({ isOpen, close }) => {
  return (
    <React.Fragment>
    {
      isOpen ?
      <React.Fragment>
        <div className="Modal-overlay" onClick={close} />
        <div className="Modal">
          <p className="title">Member Login complete</p>
          <div className="content">
            <p style={p_style}>
            Thank you for login as a member on the YUM site.
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