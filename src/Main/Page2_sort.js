import React, { Component } from 'react';
import './Main.css';
import Post from '../components/Post'
import post6 from '../img/post7.jpg';
import post7 from '../img/post8.jpg';
import post8 from '../img/nordic14.jpg';
import post9 from '../img/nordic1.jpg';
import post10 from '../img/nordic4.jpg';
import post11 from '../img/nordic17.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import { Dropdown, Pagination } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';

let active = 2;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/pages/'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}
      </Pagination.Item>
  );
}

let thumb_des =[
  "How to choose an interior company",
  "Interior Products vs. Sale Events",
  "How to find the right interior for you",
  "What is a interior",
  "Interior method preferred by young people",
  "How to choose a good interior"  
]

let post = [
  post6,
  post7,
  post8,
  post9,
  post10,
  post11
]

let posts = [];
for (let number=5; number>=0;number--){
    let cnt = number*23
    posts.push(
        <Post thumb={post[number]} thumb_des={thumb_des[number]} count={cnt}> </Post>
);}

class Page2_sort extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuTemplate />

        <div className = "tags">
          <Badge pill variant="info">
            Vintage <strong>x</strong>
          </Badge>
          <Badge pill variant="info">
            Nordic <strong>x</strong>
          </Badge>
          <Badge pill variant="info">
            lighting <strong>x</strong>
          </Badge>
        </div>

        <Dropdown className="dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            SORT BY
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="YUM_HCI_Project/pages_2_popular/">Popluarity</Dropdown.Item>
            <Dropdown.Item href="/YUM_HCI_Project/pages2/">Last updated</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
        <div className="main-post">
          {posts}
          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default Page2_sort;
