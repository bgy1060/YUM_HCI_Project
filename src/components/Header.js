/* header */

import React from 'react';
import './Header.css';
import mypage from './account_icon.png';
import signin from './signin_icon.png';
// import signout from './signout_icon.png';

const Header = () => {
  return (
    <div>


      <main className = "header-template">

        /*검색창*/
        <input className = "search"
          placeholder = "search for tags"
        />

        /*고정 component들*/

        <div className = "header-items">

          <div className = "sign-in">
            <p>SIGN-IN</p>
            <img src = {signin} alt = 'signin' className="signinicon"/>
          </div>

          <div className = "sign-out">
          </div>

          <div className = "mypage">
            <p>MY PAGE</p>
            <img src = {mypage} alt = 'mypage' className="mypageicon"/>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Header;
