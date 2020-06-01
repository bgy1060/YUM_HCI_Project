import React, { Component } from 'react';
import './login.css';
import mint from './logo_mint.png';

class Log extends Component {
  constructor() {
    super();    
    
    this.state = {form: 'login'};   
    
    // I like using objects to toggle values. We could just use true/false and just set to !self value as well. 
    this.toggle = {
      login: 'register',
      register: 'login'
    };
  }
  
  onSubmit(e) {
    e.preventDefault();
  }

  render() {    
    return (
      <div>
      <div style={{transform: `translate(${this.state.form === 'login' ? -16 : 7}%, 0%)`}}>
        <img src = {mint} alt = 'mint' className="logocon"/>
      </div>
      <div className="container">
        <div style={{transform: `translate(${this.state.form === 'login' ? -2 : 105}%, 0%)`}} className="form-div">
          <form onSubmit={this.onSubmit.bind(this)}>
            <input placeholder="Email" type="text" />
            <br></br>
            <input placeholder="Password" type="password" />
            <br></br>
            {this.state.form === 'login' ? '': <input placeholder="Re-typed password" type="password" />}
            <br></br>
            <button className="button-primary">Submit</button>
          </form>
        </div>
        <div style={{transform: `translate(${this.state.form === 'login' ? 30: -460}%, 0%)`}} className="button-div">
          <p>{this.state.form === 'login' ? 'Do not have an account?' : 'Already a member?'}</p>
          <button onClick={() => {this.setState({form: this.toggle[this.state.form]})}}>{this.toggle[this.state.form]}</button>
        </div>
      </div>
      </div>
    );
  }
}
export default Log;
