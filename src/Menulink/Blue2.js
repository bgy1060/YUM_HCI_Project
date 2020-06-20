import React, { Component } from 'react';
import './Blue.css';
import Post from '../components/Post'
import Blue4 from '../img/blue4.PNG';
import Blue5 from '../img/blue5.jpg';
import Blue6 from '../img/blue6.jpg';
import Blue7 from '../img/blue7.jpg';
import Blue8 from '../img/blue8.jpg';
import Blue9 from '../img/blue9.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import {Dropdown, Pagination } from 'react-bootstrap'


let active = 2;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/blue/'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}  
      </Pagination.Item>
  );
}

class Blue2 extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuTemplate />
        <Dropdown className="dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            SORT BY
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Popluarity</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Last updated</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
        <div className="main-post">
          <Post thumb={Blue4} thumb_des="Classic blue, stylishly used for furniture color" count="526"/>
          <Post thumb={Blue5} thumb_des="Beautiful-Blue-White-Bedroom-Interior-Theme"  count="46"/>
          <Post thumb={Blue6} thumb_des="Minimalist Blue Bathroom Interior Color Idea"  count="44"/>
          <Post thumb={Blue7} thumb_des="Contemporary-Blue-Kitchen-Interior-Design-Idea"  count="690"/>
          <Post thumb={Blue8} thumb_des="Light-Blue-Color-For-Girl-Bedroom"  count="257"/>
          <Post thumb={Blue9} thumb_des="Elegant-Blue-Interior-Idea-For-Home"  count="585"/>
          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default Blue2;
