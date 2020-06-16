import React, { Component } from 'react';
import './register.css';
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



class Regi extends Component {
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
        <input className="repw" placeholder="Re-typed password" type="password" />
        <div id="btn_group">
          <button className="regi_btn2">Register</button>
        </div>
      </div>
    );
  }
}
export default Regi;
