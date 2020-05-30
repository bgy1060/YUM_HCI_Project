import React, { Component } from 'react';
import './login.css';
import mint from './logo_mint.png';

class Log extends Component {
  constructor() {
    super();    
    
    this.state = {form: 'login'};   
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
      <div style={{transform: `translate(${this.state.form === 'login' ? -350 : 270}px, 0px)`}}>
        <img src = {mint} alt = 'mint' className="logocon"/>
      </div>
      <div className="container">
        <div style={{transform: `translate(${this.state.form === 'login' ? 0 : 600}px, 0px)`}} className="form-div">
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
        <div style={{transform: `translate(${this.state.form === 'login' ? 100: -600}px, 0px)`}} className="button-div">
          <p>{this.state.form === 'login' ? 'Do not have an account?' : 'Already a member?'}</p>
          <button onClick={() => {this.setState({form: this.toggle[this.state.form]})}}>{this.toggle[this.state.form]}</button>
        </div>
      </div>
      </div>
    );
  }
}
export default Log;
