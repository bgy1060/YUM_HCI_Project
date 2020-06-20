import React, { Component } from 'react';
import './Nordic.css';
import Post from '../components/Post'
import nordic7 from '../img/nordic7.jpg';
import nordic8 from '../img/nordic8.jpg';
import nordic9 from '../img/nordic9.jpg';
import nordic10 from '../img/nordic10.jpg';
import nordic11 from '../img/nordic11.jpg';
import nordic12 from '../img/nordic12.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import {Dropdown, Pagination } from 'react-bootstrap'


let active = 2;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/nordic/'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}  
      </Pagination.Item>
  );
}

class Nordic2 extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuTemplate />
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
          <Post thumb={nordic7} thumb_des="Pink and green scatter cushions and pastel coloured wall art introduce colour to the living room of home tour number two" count="57"/>
          <Post thumb={nordic8} thumb_des="A white hallway connects the living areas"  count="39"/>
          <Post thumb={nordic9} thumb_des="Hanging planters rain down the kitchen window"  count="24"/>
          <Post thumb={nordic10} thumb_des="The abundant living greenery lifts the look of a grey and white one wall kitchen"  count="192"/>
          <Post thumb={nordic11} thumb_des="Living room sofa faces a glass wall bedroom, accessed via double doors"  count="57"/>
          <Post thumb={nordic12} thumb_des="Living room in tour number three is accessorised with a beautiful botanical art print. A neat wooden side table holds some quirky animal figurines"  count="28"/>
          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default Nordic2;
