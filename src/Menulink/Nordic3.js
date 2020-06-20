import React, { Component } from 'react';
import './Nordic.css';
import Post from '../components/Post'
import nordic13 from '../img/nordic13.jpg';
import nordic14 from '../img/nordic14.jpg';
import nordic15 from '../img/nordic15.jpg';
import nordic16 from '../img/nordic16.jpg';
import nordic17 from '../img/nordic17.jpg';
import nordic18 from '../img/nordic18.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import {Dropdown, Pagination } from 'react-bootstrap'
import { Badge } from 'react-bootstrap';

let active = 3;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/nordic/'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}  
      </Pagination.Item>
  );
}

class Nordic3 extends Component {
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
          <Post thumb={nordic13} thumb_des="Scandinavian Interior Design – 10 ideas for your livingroom" count="64"/>
          <Post thumb={nordic14} thumb_des="Scandinavian wood design with plants"  count="237"/>
          <Post thumb={nordic15} thumb_des="Simple Scandinavian style"  count="27"/>
          <Post thumb={nordic16} thumb_des="Couch with table in a simple style"  count="47"/>
          <Post thumb={nordic17} thumb_des="Light Scandinavian interior"  count="58"/>
          <Post thumb={nordic18} thumb_des="Clean style with Nordic interior"  count="28"/>
          
          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default Nordic3;
