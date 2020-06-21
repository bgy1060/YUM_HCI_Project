import React, { Component } from 'react';
import './White.css';
import Post from '../components/Post'
import White1 from '../img/white1.jpg';
import White2 from '../img/white2.jpg';
import White3 from '../img/white3.jpg';
import White4 from '../img/white4.jpg';
import White5 from '../img/white5.jpg';
import White6 from '../img/white6.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import {   Pagination } from 'react-bootstrap'
import { Badge } from 'react-bootstrap';

let active = 1;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/white/'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}  
      </Pagination.Item>
  );
}

class White extends Component {
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
            living room styling <strong>x</strong>
          </Badge>{' '}
        </div>
        <div className="main-post">
          <Post thumb={White2} thumb_des="Minimalist living room, which is furnished with two"  count="235"/>
          <Post thumb={White1} thumb_des="White bedroom with ocean view" count="11"/>
          <Post thumb={White3} thumb_des="The only colour in the room comes from a small library, which only half fills"  count="19"/>
          <Post thumb={White4} thumb_des="Despite the all white colour scheme in the galley kitchen"  count="65"/>
          <Post thumb={White5} thumb_des="A white bedroom scheme is a calm and restful place"  count="24"/>
          <Post thumb={White6} thumb_des="A square toilet and bidet provide a high end look in the plain scheme"  count="67"/>
          
          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default White;
