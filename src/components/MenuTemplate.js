import React from 'react';
import './MenuTemplate.css';
import logo from './yum_logo.png';
import { Link } from 'react-router-dom';
import { Overlay, Popover, OverlayTrigger } from 'react-bootstrap';

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
                <li>#WHITE</li>
                <li>#WOOD</li>
                <li>#BLUE</li>
                <li>#SIMPLE</li>
                <li>#VINTAGE</li>
                <li>#NORDIC</li>
              </ul>


              <div className = "helpmsg">
                <span className = "msg"> If you want to<br/>post your post?<br/> </span>
                <OverlayTrigger trigger = "click" placement = "right-start" overlay = {popover}>
                  <button variant = "success" className = "helpbtn">CLICK</button>
                </OverlayTrigger>
              </div>

            </div>
        </div>
      </main>


    </div>
  );
};

export default MenuTemplate;
