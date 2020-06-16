import React, { Component } from 'react';
import './login.css';
import mint from './logo_mint.png';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import Select from 'react-select';
import { Link } from 'react-router-dom';

const options = [
  { value: 'gmail', label: 'gmail.com' },
  { value: 'naver', label: 'naver.com' },
  { value: 'nate', label: 'nate.com' },
  { value: 'daum', label: 'hanmail.net' },
  { value: 'direct', label: 'Direct Input' }
  
];

const selectStyle = {
  control: (base, state) => ({
    ...base,
    boxShadow: "none",
    '&:hover': { borderColor: 'gray' },
    border: '1.8px solid lightgray',
    color: state.isSelected ? 'lightgray' : 'gray'
  })
}


class Log extends Component {
  render() {    
    return (
      <div>
        <Header />
        <MenuTemplate />
        <img src = {mint} alt = 'mint' className="logocon"/>
        <input className="email" placeholder="Email" type="text" />
        <span >@</span>
        <Select className='select' placeholder="Direct Input" menuColor='lightgray' styles={selectStyle} options = {options} />
        <input className="pw" placeholder="Password" type="password" />
        <div id="btn_group">
          <button className="log_btn">Login</button>
          <Link to='/YUM_HCI_Project/register' >
              <button className="regi_btn">Register</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Log;
