/* menu sidebar */

import React from 'react';
import './MenuTemplate.css';
import logo from './yum_logo.png';

const MenuTemplate = () => {
  return (
    <div>
      <main className = "menu-template">
        <div className = "menubar">
            <img src = {logo} alt = 'logo' className="yumicon"/>

            /*menulist*/

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

              /*도움 메시지*/

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
