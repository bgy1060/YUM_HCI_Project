import React, { Component } from 'react';
import './register.css';
import mint from './logo_mint.png';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import Select from 'react-select';
import Modal2 from './Modal2';


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



class Regi extends Component {

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
            <span className='a'>@</span>
            <Select className='select' placeholder="Direct Input" menuColor='lightgray' styles={selectStyle} options = {options} />
            <input className="pw" placeholder="Password" type="password" />
        <input className="repw" placeholder="Re-typed password" type="password" />

        </div>
        <div id="btn_group">
          <button className="regi_btn2" onClick={this.openModal}>Register</button>
          <Modal2 isOpen={this.state.isModalOpen} close={this.closeModal} />
        </div>
      </div>
    );
  }
}
export default Regi;
