import React, { Component } from 'react';
import './Wood.css';
import Post from '../components/Post'
import Post6 from '../img/post6.jpg';
import Post5 from '../img/post5.jpg';
import Wood1 from '../img/wood1.jpg';
import Wood2 from '../img/wood2.jpg';
import Wood3 from '../img/wood3.jpg';
import Wood4 from '../img/wood4.JPG';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import {   Pagination } from 'react-bootstrap'
import { Badge } from 'react-bootstrap';

let active = 1;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/wood/'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}  
      </Pagination.Item>
  );
}

class Wood extends Component {
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
          <Post thumb={Post6} thumb_des="Trendy studio wood interior" count="11"/>
          <Post thumb={Post5} thumb_des="5 ways to do good interior"  count="235"/>
          <Post thumb={Wood1} thumb_des="G Penthouse interior design"  count="19"/>
          <Post thumb={Wood2} thumb_des="Small Modern House In Kyoto With Wood Interiors"  count="65"/>
          <Post thumb={Wood3} thumb_des="Kitchen with natural scent"  count="24"/>
          <Post thumb={Wood4} thumb_des="INTERIOR DR"  count="67"/>
          
          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default Wood;
