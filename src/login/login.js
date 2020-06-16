import React, { Component } from 'react';
import './login.css';
import mint from './logo_mint.png';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import Select from 'react-select';

const options = [
  { value: 'gmail', label: 'gmail.com' },
  { value: 'naver', label: 'naver.com' },
  { value: 'nate', label: 'nate.com' },
  { value: 'daum', label: 'hanmail.net' } 
];



class Log extends Component {
  render() {    
    return (
      <div>
        <Header />
        <MenuTemplate />
        <img src = {mint} alt = 'mint' className="logocon"/>
        <input className="email" placeholder="Email" type="text" />
        <span >@</span>
        <Select className='select' options = {options} />
        <input className="pw" placeholder="Password" type="password" />
        <div id="btn_group">
          <button className="log_btn">Login</button>
          <button className="regi_btn">Register</button>
        </div>
        
        


      </div>
    );
  }
}
export default Log;
