import React from 'react';
import './MenuTemplate.css';
import logo from './yum_logo.png';
import { Link } from 'react-router-dom';

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
                <span> If you want to<br/>post your post?<br/> </span>
                <button className = "helpcbtn">CLICK</button>
              </div>

            </div>
        </div>
      </main>

      <div className='helppopup'>
      </div>

    </div>
  );
};

export default MenuTemplate;
