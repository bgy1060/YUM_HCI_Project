import React from 'react';
import './Header.css';
import mypage from './account_icon.png';
import signin from './signin_icon.png';
// import signout from './signout_icon.png';
import { Link } from 'react-router-dom';
const link_style = {
  'textDecoration': 'none'
}

const Header = () => {
  return (
    <div>


      <main className = "header-template">

        <input className = "search"
          placeholder = "search for tags"
        />


        <div className = "header-items">

          <div className = "sign-in">
            <p>SIGN-IN</p>
            <img src = {signin} alt = 'signin' className="signinicon"/>
          </div>

          <div className = "sign-out">
          </div>

          <div className = "mypage">
            <Link to='/mypage' >
              <p style={link_style}>MY PAGE</p>
            </Link>
            <img src = {mypage} alt = 'mypage' className="mypageicon"/>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Header;
