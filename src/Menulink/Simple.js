import React, { Component } from 'react';
import './Simple.css';
import Post from '../components/Post'
import simple1 from '../img/simple1.jpg';
import simple2 from '../img/simple2.jpg';
import simple3 from '../img/simple3.jpg';
import simple4 from '../img/simple4.jpg';
import simple5 from '../img/simple5.jpg';
import simple6 from '../img/simple6.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import {Dropdown, Pagination } from 'react-bootstrap'
import { Badge } from 'react-bootstrap';

let active = 1;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/simple/'+number+'/'
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}
      </Pagination.Item>
  );
}

class Simple extends Component {
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
          <Post thumb={simple3} thumb_des="INTERIOR DESIGN IDEAS AND TIPS FROM DEVON AND MIRANDA"  count="235"/>
          <Post thumb={simple1} thumb_des="Simple ocean view room interior" count="11"/>
          <Post thumb={simple2} thumb_des="2 Simple, Modern Homes with Simple, Modern Furnishings"  count="19"/>
          <Post thumb={simple4} thumb_des="Always, always, always measure and space plan first"  count="65"/>
          <Post thumb={simple5} thumb_des="Identify the form and function of a space before proceeding with a design"  count="24"/>
          <Post thumb={simple6} thumb_des="The more chairs the merrier"  count="67"/>

          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default Simple;
