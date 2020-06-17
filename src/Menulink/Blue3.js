import React, { Component } from 'react';
import './Blue.css';
import Post from '../components/Post'
import Blue10 from '../img/blue10.jpg';
import Blue11 from '../img/blue11.jpg';
import Blue12 from '../img/blue12.jpg';
import Blue13 from '../img/blue13.jpg';
import Blue14 from '../img/blue14.PNG';
import Blue15 from '../img/blue15.PNG';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import {Dropdown, Pagination } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';


let active = 3;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/blue/'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}
      </Pagination.Item>
  );
}

class Blue3 extends Component {
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
          <Post thumb={Blue10} thumb_des="How to decorate and accessorise rooms with blue" count="53"/>
          <Post thumb={Blue11} thumb_des="Color blue inspired interior:There's more blue than it meets the eye"  count="9"/>
          <Post thumb={Blue12} thumb_des="If you genuinely adore blue and like being surrounded by it, start by painting the walls in your favorite blue shade."  count="244"/>
          <Post thumb={Blue13} thumb_des="The most classic pairing is a cool blue accent — being the least aggressive color choice possible."  count="78"/>
          <Post thumb={Blue14} thumb_des="color blue offers freshness and elegance in this Mediterranean themed room"  count="97"/>
          <Post thumb={Blue15} thumb_des="The combination of white and blue accentuates the neat but bold effect"  count="55"/>
          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default Blue3;
