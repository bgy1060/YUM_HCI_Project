import React, { Component } from 'react';
import './login.css';
import mint from './logo_mint.png';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import Modal from './Modal';

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

  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false, 
    }
  }
  
  openModal = () => {
    this.setState({ isModalOpen: true });
  }
  
  closeModal = () => {
    this.setState({ isModalOpen: false }); 
  }

  render() {    
    return (
      <div>
        <Header />
        <MenuTemplate />
        <img src = {mint} alt = 'mint' className="logocon"/>
        
        <div id='email_group'>
            <input className="email" placeholder="Email" type="text" />
            <span className='a' >@</span>
            <Select className='select' placeholder="Direct Input" menuColor='lightgray' styles={selectStyle} options = {options} />
        </div>
        
        <input className="pw" placeholder="Password" type="password" />
        <div id="btn_group">
          <button className="log_btn" onClick={this.openModal}>Login</button>
          <Modal isOpen={this.state.isModalOpen} close={this.closeModal} />
          <Link to='/YUM_HCI_Project/register' >
              <button className="regi_btn">Register</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Log;
