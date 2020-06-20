import React, { Component } from 'react';
import './Main.css';
import Post from '../components/Post'
import post1 from '../img/post1.jpg';
import post2 from '../img/post2.jpg';
import post3 from '../img/post3.jpg';
import post4 from '../img/post4.jpg';
import post5 from '../img/post5.jpg';
import post6 from '../img/post6.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import { Dropdown, Pagination } from 'react-bootstrap'
import { Badge } from 'react-bootstrap';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

let active = 1;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/pages'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}
      </Pagination.Item>
  );
}

let cnt = [
]
for (let number=1;number<=6;number++){
  cnt.push(getRandomInt(1,1000));
}

let post = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6
]
let thumb_des = [
  "Nomadic Style Trend Meets Cool Industrail Backdrops" ,
  "10 ways to decorate a vintage interior: introduction of related accessorie",
  "Tips for finding good vintage accessories ",
  "Everything related to the blue interior: focusing on furniture layout " ,
  "5 ways to do good interior",
  "Trendy studio wood interior" 
]

let posts = [];
for (let number=0; number<=5;number++){
  posts.push(
    <Post thumb={post[number]} thumb_des={thumb_des[number]} count={cnt[number]}> </Post>
);}

class Main extends Component {
  
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
          <Dropdown.Menu >
            <Dropdown.Item href="/YUM_HCI_Project/popular/">Popluarity</Dropdown.Item>
            <Dropdown.Item href="/YUM_HCI_Project/">Last updated</Dropdown.Item>
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
export default Main;
