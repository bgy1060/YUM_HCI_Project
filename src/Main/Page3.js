import React, { Component } from 'react';
import './Main.css';
import Post from '../components/Post'
import post12 from '../img/post12.jpg';
import post13 from '../img/post13.jpg';
import post14 from '../img/post14.jpg';
import post15 from '../img/post15.jpg';
import post16 from '../img/post16.jpg';
import post17 from '../img/post17.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import {Dropdown, Pagination } from 'react-bootstrap'

let active = 3;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/pages/'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}  
      </Pagination.Item>
  );
}

class Page3 extends Component {
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
          <Post thumb={post17} thumb_des="Introducing fashionable interiors this spring" count="51"/>
          <Post thumb={post12} thumb_des="Interior introduced in broadcast"  count="6"/>
          <Post thumb={post13} thumb_des="10 tips on how to make a good interior"  count="86"/>
          <Post thumb={post14} thumb_des="Matching colors that are popular this year"  count="435"/>
          <Post thumb={post15} thumb_des="How to repair an old house and examples"  count="7"/>
          <Post thumb={post16} thumb_des="Fashionable startup interior and company introduction"  count="87"/>
          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default Page3;
