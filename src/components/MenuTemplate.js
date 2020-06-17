import React from 'react';
import './MenuTemplate.css';
import logo from './yum_logo.png';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';


const MenuTemplate = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <main className = "menu-template">
        <div className = "menubar">

        <Link to='/YUM_HCI_Project/' >
            <img src = {logo} alt = 'logo' className="yumicon"/>
        </Link>
            <div className = "menulist">

              <p>INTERIOR MOOD</p>

              <ul>
                <Link to='/YUM_HCI_Project/white/' >
                    <li>#WHITE</li>
                </Link>

                <Link to='/YUM_HCI_Project/wood/' >
                    <li>#WOOD</li>
                </Link>

                <Link to='/YUM_HCI_Project/blue/' >
                    <li>#BLUE</li>
                </Link>

                <Link to='/YUM_HCI_Project/simple/' >
                    <li>#SIMPLE</li>
                </Link>

                <Link to='/YUM_HCI_Project/vintage/' >
                    <li>#VINTAGE</li>
                </Link>

                <Link to='/YUM_HCI_Project/nordic/' >
                    <li>#NORDIC</li>
                </Link>

              </ul>

              <div className = "helpmsg">
                <span className = "msg"> If you want to<br/>post your post?<br/> </span>

                <button variant = "success" className = "helpbtn" onClick={handleShow}>CLICK</button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>If you want to post your post?</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>If you add the "tag" starting "#YUM_" to the blog post,
                  the post is posted on YUM hompage to promote it.</Modal.Body>
                </Modal>

              </div>

            </div>
        </div>
      </main>


    </div>
  );
};

export default MenuTemplate;
