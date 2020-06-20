import React, { Component } from 'react';
import './White.css';
import Post from '../components/Post'
import White13 from '../img/white13.jpg';
import White14 from '../img/white14.jpg';
import White15 from '../img/white15.PNG';
import White16 from '../img/white16.PNG';
import White17 from '../img/white17.PNG';
import White18 from '../img/white18.PNG';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import {   Pagination } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';

let active = 3;
let items = [];
for (let number = 1; number <= 3; number++) {
  var url = '/YUM_HCI_Project/white/'+number
  items.push(
      <Pagination.Item href={url} key={number} active={number === active}>
            {number}  
      </Pagination.Item>
  );
}

class White3 extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuTemplate/>
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

        <div className="main-post">
          <Post thumb={White13} thumb_des="Scandinavian style is the trendiedst in white interior design" count="53"/>
          <Post thumb={White14} thumb_des="Geometric details bring excitement to modern white interiors"  count="9"/>
          <Post thumb={White15} thumb_des="White is as powerful and dramatic in this more graphic aesthetic as it is in the softer, layered Scandinavian approach"  count="244"/>
          <Post thumb={White16} thumb_des="White on white modern foyer layers on the shapes with its wall of black and white photography and just add a little contrast, the designer layered in an organic light pedant and a gilded mirror"  count="78"/>
          <Post thumb={White17} thumb_des="Light-White-Color-For-Living-room"  count="97"/>
          <Post thumb={White18} thumb_des="A modern white dedroom brings on th geometry via its quilted duvet and head board and by the symmetry of stools, flower vases, and bedside lights"  count="55"/>
          <Pagination onClick={this.pageChanged}>{items}</Pagination>
      </div>
    </div>
    );
  }
}
export default White3;
