import React, { Component } from 'react';
import './post.css';
import MenuTemplate from './components/MenuTemplate';
import Header from './components/Header';
import post1 from './img/post1.jpg';
import post2 from './img/post2.jpg';
import post3 from './img/post3.jpg';
import post4 from './img/post4.jpg';
import post5 from './img/post5.jpg';
import post6 from './img/post6.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuTemplate />
        <div className="main-post">
          <div className="post" id="post-1">
              <img src = {post1} alt = "post1"/>
              <p>5 Simple ideas : Modern Vintage </p>
          </div>
          <div className="post" id="post-2">
              <img src = {post2} alt = "post2"/>
              <p>Nomadic Style Trend Meets Cool Industrail Backdrops </p>
          </div>
          <div className="post" id="post-3">
              <img src = {post3} alt = "post3"/>
              <p>10 ways to decorate a vintage interior: introduction of related accessories </p>
          </div>
          <div className="post" id="post-4">
              <img src = {post4} alt = "post4"/>
              <p>Everything related to the blue interior: focusing on furniture layout </p>
          </div>
          <div className="post" id="post-5">
              <img src = {post5} alt = "post5"/>
              <p>Tips for finding good vintage accessories </p>
          </div>
          <div className="post" id="post-6">
              <img src = {post6} alt = "post6"/>
              <p>Trendy studio wood interior</p>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
