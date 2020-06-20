import React, { Component } from 'react';
import './Main.css';
import Post from '../components/Post'
import post12 from '../img/blue3.jpg';
import post13 from '../img/nordic11.jpg';
import post14 from '../img/vintage14.jpg';
import post15 from '../img/wood3.jpg';
import post16 from '../img/vintage13.jpg';
import post17 from '../img/nordic3.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import { Dropdown, Pagination } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';

let active = 3;
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
    "Introducing fashionable interiors this spring",
    "Interior introduced in broadcast",
    "10 tips on how to make a good interior",
    "Matching colors that are popular this year",
    "How to repair an old house and examples",
    "Fashionable startup interior and company introduction",
]

let post = [
  post12,
  post13,
  post14,
  post15,
  post16,
  post17
]

let posts = [];
for (let number=5; number>=0;number--){
    let cnt = number*23
    posts.push(
        <Post thumb={post[number]} thumb_des={thumb_des[number]} count={cnt}> </Post>
);}

class Page3_sort extends Component {
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
            <Dropdown.Item href="YUM_HCI_Project/pages/3/popular/">Popluarity</Dropdown.Item>
            <Dropdown.Item href="/YUM_HCI_Project/pages/3/">Last updated</Dropdown.Item>
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
export default Page3_sort;
