import React, { Component } from 'react';
import './Wood.css';
import Post from '../components/Post'
import Wood5 from '../img/wood5.JPG';
import Wood6 from '../img/wood6.JPG';
import Wood7 from '../img/wood7.jpg';
import Wood8 from '../img/wood8.jpg';
import Wood9 from '../img/wood9.jpg';
import Wood10 from '../img/wood10.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import {Dropdown, Pagination } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';


let active = 2;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/wood/'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}
      </Pagination.Item>
  );
}

class Wood2 extends Component {
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
          <Post thumb={Wood5} thumb_des="The mono-materiality of this space is only interrupted by the long wooden shelf" count="53"/>
          <Post thumb={Wood6} thumb_des="Wood Slat Shotgun House / Austigard Arkitektur"  count="9"/>
          <Post thumb={Wood7} thumb_des="Minimalist Wood Kitchen Interior Color Idea"  count="244"/>
          <Post thumb={Wood8} thumb_des="Contemporary-Wood-Kitchen-Interior-Design-Idea"  count="78"/>
          <Post thumb={Wood9} thumb_des="wood interior inspiration"  count="97"/>
          <Post thumb={Wood10} thumb_des="This is a space where you can experience healing and relaxation"  count="55"/>
          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default Wood2;
