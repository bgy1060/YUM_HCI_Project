import React from 'react';
import './MenuTemplate.css';
import logo from './yum_logo.png';
import { Link } from 'react-router-dom';
import { Popover, OverlayTrigger } from 'react-bootstrap';

const popover = (
  <Popover id = "popover-basic">
    <Popover.Content className = "msg">
      If you add the "tag" <br/>starting <strong>"#YUM_"</strong> <br/>to the blog post,<br/>
      the post is posted <br/>on YUM hompage<br/> to promote it.
    </Popover.Content>
  </Popover>
);

const MenuTemplate = () => {

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
                <OverlayTrigger trigger = "click" placement = "right-start" overlay = {popover}>
                  <button variant = "success" className = "helpbtn" >CLICK</button>
                </OverlayTrigger>
              </div>

            </div>
        </div>
      </main>


    </div>
  );
};

export default MenuTemplate;
