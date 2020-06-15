import React, { Component } from 'react';
import './Main.css';
import Post from '../components/Post'
import post6 from '../img/post7.jpg';
import post7 from '../img/post8.jpg';
import post8 from '../img/nordic14.jpg';
import post9 from '../img/nordic1.jpg';
import post10 from '../img/nordic4.jpg';
import post11 from '../img/nordic17.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import {Dropdown, Pagination } from 'react-bootstrap'

let active = 2;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/pages/'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}  
      </Pagination.Item>
  );
}

class Page2 extends Component {
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
          <Post thumb={post6} thumb_des="How to choose an interior company" count="53"/>
          <Post thumb={post7} thumb_des="Interior Products vs. Sale Events"  count="9"/>
          <Post thumb={post8} thumb_des="How to find the right interior for you"  count="244"/>
          <Post thumb={post9} thumb_des="What is a interior"  count="78"/>
          <Post thumb={post10} thumb_des="Interior method preferred by young people"  count="97"/>
          <Post thumb={post11} thumb_des="How to choose a good interior"  count="55"/>
          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default Page2;
