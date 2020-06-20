import React, { Component } from 'react';
import './White.css';
import Post from '../components/Post'
import White7 from '../img/white7.jpg';
import White8 from '../img/white8.jpg';
import White9 from '../img/white9.jpg';
import White10 from '../img/white10.jpg';
import White11 from '../img/white11.jpg';
import White12 from '../img/white12.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import {   Pagination } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';


let active = 2;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/white/'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}  
      </Pagination.Item>
  );
}

class White2 extends Component {
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
          <Post thumb={White7} thumb_des="Clear style, white, used almost everywhere, symbolizing purity" count="53"/>
          <Post thumb={White8} thumb_des="White can create a joyful and also a serious space"  count="9"/>
          <Post thumb={White9} thumb_des="Minimalist Blue Bathroom Interior Color Idea"  count="244"/>
          <Post thumb={White10} thumb_des="White is the color of peace, that’s why at battles men used to wave a white material to the opponent forcing it to make peace"  count="78"/>
          <Post thumb={White11} thumb_des="White is perfect for all rooms inside your house or apartment"  count="97"/>
          <Post thumb={White12} thumb_des="Elegant-White-Interior-Idea-For-Home"  count="55"/>
          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default White2;
