import React, { Component } from 'react';
import './Simple.css';
import Post from '../components/Post'
import simple13 from '../img/simple13.jpg';
import simple14 from '../img/simple14.jpg';
import simple15 from '../img/simple15.jpg';
import simple16 from '../img/simple16.jpg';
import simple17 from '../img/simple17.jpg';
import simple18 from '../img/simple18.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import {Dropdown, Pagination } from 'react-bootstrap'


let active = 3;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/simple/'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}  
      </Pagination.Item>
  );
}

class Simple3 extends Component {
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
          <Post thumb={simple13} thumb_des="50 Easy Home Decor Ideas That Will Instantly Transform Your Space" count="53"/>
          <Post thumb={simple14} thumb_des="Simple Interior Design Brings Natural Decoration Ideas For Modern Residence"  count="9"/>
          <Post thumb={simple15} thumb_des="10 Ways to Make Your Home Look Elegant with simple interior design"  count="244"/>
          <Post thumb={simple16} thumb_des="INTERIOR DESIGN SIMPLE DESIGNS FOR MINIMALIST LIVING ROOM OF"  count="78"/>
          <Post thumb={simple17} thumb_des="10 Ways to Make Your Home Look Elegant on a Budget"  count="97"/>
          <Post thumb={simple18} thumb_des="Simple Interior Design Ideas Luxury White Living Room Home"  count="55"/>
          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default Simple3;
