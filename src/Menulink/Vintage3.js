import React, { Component } from 'react';
import './Vintage.css';
import Post from '../components/Post'
import vintage12 from '../img/vintage12.jpg';
import vintage13 from '../img/vintage13.jpg';
import vintage14 from '../img/vintage14.jpg';
import vintage15 from '../img/vintage15.jpg';
import vintage16 from '../img/vintage16.jpg';
import vintage17 from '../img/vintage17.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import {   Pagination } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';


let active = 3;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/vintage/'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}  
      </Pagination.Item>
  );
}

class Vintage3 extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuTemplate/>
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
          <Post thumb={vintage12} thumb_des="Vintage Interior Design Ideas" count="53"/>
          <Post thumb={vintage13} thumb_des="Eclectic"  count="9"/>
          <Post thumb={vintage14} thumb_des="Modern Vintage"  count="244"/>
          <Post thumb={vintage15} thumb_des="Elegant Essentials"  count="78"/>
          <Post thumb={vintage16} thumb_des="Comfortable Vintage"  count="97"/>
          <Post thumb={vintage17} thumb_des="The 5 Rules of Vintage Interior Desig"  count="55"/>
          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default Vintage3;
