import React, { Component } from 'react';
import MenuTemplate from './components/MenuTemplate';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuTemplate />
      </div>
    );
  }
}
export default App;
