import React, { Component } from 'react';
import './Blue.css';
import Post from '../components/Post'
import Blue1 from '../img/blue1.PNG';
import post15 from '../img/post15.jpg';
import post16 from '../img/blue15.JPG';
import post4 from '../img/post4.jpg';
import Blue2 from '../img/blue2.PNG';
import Blue3 from '../img/blue3.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import {Dropdown, Pagination } from 'react-bootstrap'
import { Badge } from 'react-bootstrap';

let active = 1;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/blue/'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}  
      </Pagination.Item>
  );
}

class Blue extends Component {
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
          <Post thumb={Blue1} thumb_des="Clean kitchen interior in blue" count="31"/>
          <Post thumb={Blue3} thumb_des="Vintage blue room interior, blue sofa on white flooring"  count="535"/>
          <Post thumb={post15} thumb_des="How to repair an old house and examples"  count="354"/>
          <Post thumb={post4} thumb_des="Everything related to the blue interior: focusing on furniture layout "  count="85"/>
          <Post thumb={post16} thumb_des="Fashionable startup interior and company introduction"  count="34"/>
          <Post thumb={Blue2} thumb_des="Pantone chose the UNIVERSAL FAVOURITE classic blue as the color of 2020"  count="65"/>
          
          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default Blue;
