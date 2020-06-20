import React, { Component } from 'react';
import './Vintage.css';
import Post from '../components/Post'
import vintage6 from '../img/vintage6.jpg';
import vintage7 from '../img/vintage7.jpg';
import vintage8 from '../img/vintage8.jpg';
import vintage9 from '../img/vintage9.jpg';
import vintage10 from '../img/vintage10.jpg';
import vintage11 from '../img/vintage11.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import {Dropdown, Pagination } from 'react-bootstrap'


let active = 2;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/vintage/'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}  
      </Pagination.Item>
  );
}

class Vintage2 extends Component {
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
          <Post thumb={vintage6} thumb_des="How To Pull Off Vintage Interior Design (Without it Looking Worn Out)" count="53"/>
          <Post thumb={vintage7} thumb_des="Choose well-made antiques"  count="9"/>
          <Post thumb={vintage8} thumb_des="Rust or other discoloration"  count="244"/>
          <Post thumb={vintage9} thumb_des="Make them your focal point"  count="78"/>
          <Post thumb={vintage10} thumb_des="Add in vintage-inspired details"  count="97"/>
          <Post thumb={vintage11} thumb_des="Copy vintage patterns and colors"  count="55"/>
          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default Vintage2;
