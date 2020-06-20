import React, { Component } from 'react';
import './Vintage.css';
import Post from '../components/Post'
import Post3 from '../img/post3.jpg';
import vintage1 from '../img/vintage1.jpg';
import vintage2 from '../img/vintage2.jpg';
import vintage3 from '../img/vintage3.jpeg';
import vintage4 from '../img/vintge4.jpeg';
import vintage5 from '../img/vintage5.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import {   Pagination } from 'react-bootstrap'
import { Badge } from 'react-bootstrap';

let active = 1;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/vintage/'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}  
      </Pagination.Item>
  );
}

class Vintage extends Component {
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
          <Post thumb={vintage1} thumb_des="How to repair an old house and examples"  count="19"/>
          <Post thumb={Post3} thumb_des="Tips for finding good vintage accessories " count="11"/>
          <Post thumb={vintage2} thumb_des="Everything related to the blue interior: focusing on furniture layout "  count="65"/>
          <Post thumb={vintage3} thumb_des="Using Antique And Vintage Items In A Modern Interior"  count="65"/>
          <Post thumb={vintage4} thumb_des="Antique And Vintage Rugs In A Modern Living Room"  count="24"/>
          <Post thumb={vintage5} thumb_des="The description of Vintage Style Interior Design"  count="67"/>
          
          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default Vintage;
