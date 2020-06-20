import React, { Component } from 'react';
import './Wood.css';
import Post from '../components/Post'
import Wood11 from '../img/wood11.jpg';
import Wood12 from '../img/wood12.jpg';
import Wood13 from '../img/wood13.jpg';
import Wood14 from '../img/wood14.jpg';
import Wood15 from '../img/wood15.jpg';
import Wood16 from '../img/wood16.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import {   Pagination } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';


let active = 3;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/wood/'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}
      </Pagination.Item>
  );
}

class Wood3 extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuTemplate />

        <div className = "tags">
          <Badge pill variant="info">
            Vintage <strong>x</strong>
          </Badge>{' '}
          <Badge pill variant="info">
            Nordic <strong>x</strong>
          </Badge>{' '}
          <Badge pill variant="info">
            lighting <strong>x</strong>
          </Badge>{' '}
        </div>

        <div className="main-post">
          <Post thumb={Wood11} thumb_des="Classic wood, stylishly used for furniture color" count="53"/>
          <Post thumb={Wood15} thumb_des="One of the best ways to go full minimalist without using white is to opt for warm wood textures"  count="97"/>
          <Post thumb={Wood12} thumb_des="Beautiful-Wood-Kitchen-Interior-Theme"  count="9"/>
          <Post thumb={Wood13} thumb_des="Wooden house"  count="244"/>
          <Post thumb={Wood14} thumb_des="8 Reasons Why Wooden Furniture Is The Most Sustainable Options For Your Home Or Office"  count="78"/>
          <Post thumb={Wood16} thumb_des="Abundance of soft pine in this home introduces an element of visual warmth and comfort"  count="55"/>
          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default Wood3;
