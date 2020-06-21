import React, { Component } from 'react';
import './Simple.css';
import Post from '../components/Post'
import simple7 from '../img/simple7.jpg';
import simple8 from '../img/simple8.jpg';
import simple9 from '../img/simple9.jpg';
import simple10 from '../img/simple10.jpg';
import simple11 from '../img/simple11.jpg';
import simple12 from '../img/simple12.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import {   Pagination } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';


let active = 2;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/simple/'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}  
      </Pagination.Item>
  );
}

class Simple2 extends Component {
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
          <Post thumb={simple7} thumb_des="Simple but very cozy apartment interior design" count="53"/>
          <Post thumb={simple8} thumb_des="Simple Interior Design Living Room House"  count="9"/>
          <Post thumb={simple9} thumb_des="Simple Dining Room Kitchen Decobizz"  count="244"/>
          <Post thumb={simple10} thumb_des="Amazing Modern House Design Contemporary Interior Home"  count="78"/>
          <Post thumb={simple11} thumb_des="Simple Home Interior Design Living Room Living Room Interior Design"  count="97"/>
          <Post thumb={simple12} thumb_des="Cozy Living Room Ideas Living Room Decor Idea With Nifty Living Room"  count="55"/>
          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default Simple2;
