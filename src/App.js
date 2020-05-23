import React, { Component } from 'react';
import Router from './Routes/Router';
import MenuTemplate from './components/MenuTemplate';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuTemplate />
        <Router/>
    </div>
    );
  }
}
export default App;
