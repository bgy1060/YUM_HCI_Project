import React, { Component } from 'react';
import './Nordic.css';
import Post from '../components/Post'
import nordic1 from '../img/nordic1.jpg';
import nordic2 from '../img/nordic2.jpg';
import nordic3 from '../img/nordic3.jpg';
import nordic4 from '../img/nordic4.jpg';
import nordic5 from '../img/nordic5.jpg';
import nordic6 from '../img/nordic6.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import {Dropdown, Pagination } from 'react-bootstrap'
import { Badge } from 'react-bootstrap';

let active = 1;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/nordic/'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}  
      </Pagination.Item>
  );
}

class Nordic extends Component {
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
          <Post thumb={nordic1} thumb_des="Nomadic Style Trend Meets Cool Industrail Backdrops" count="11"/>
          <Post thumb={nordic2} thumb_des="Vintage blue room interior, blue sofa on white flooring"  count="235"/>
          <Post thumb={nordic3} thumb_des="How to repair an old house and examples"  count="19"/>
          <Post thumb={nordic4} thumb_des="Everything related to the blue interior: focusing on furniture layout "  count="65"/>
          <Post thumb={nordic5} thumb_des="Fashionable startup interior and company introduction"  count="24"/>
          <Post thumb={nordic6} thumb_des="Pantone chose the UNIVERSAL FAVOURITE classic blue as the color of 2020"  count="67"/>
          
          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default Nordic;
