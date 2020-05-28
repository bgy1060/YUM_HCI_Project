import React, { Component } from 'react';
import '../Main/Main.css';
import './Mypage.css'
import Post from '../components/Post'
import post1 from '../img/post1.jpg';
import post2 from '../img/post2.jpg';
import post3 from '../img/post3.jpg';
import post4 from '../img/post4.jpg';
import post5 from '../img/post5.jpg';
import post6 from '../img/post6.jpg';
import MenuTemplate from '../components/MenuTemplate';
import Header from '../components/Header';
import share from '../img/share.png'
import likeChecked from '../img/likeChecked.png'
import { Button } from 'react-bootstrap'

class My extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuTemplate />
        <p className="Mypage-top">My Page</p>
        <div className="Mypage-like">
            <img src = {likeChecked} className="my-like" alt = "share"/>
            <p className="Mypage-like-title">Likes</p>
          <Post thumb={post5} thumb_des="5 ways to do good interior"  count="67"/>
          <Post thumb={post1} thumb_des="Nomadic Style Trend Meets Cool Industrail Backdrops" count="11"/>
          <Post thumb={post3} thumb_des="Tips for finding good vintage accessories "  count="24"/>
          <Button variant="info" >More +</Button> 
        </div>
        <div className="Mypage-share">
            <img src = {share} className="my-share" alt = "share"/>
            <p className="Mypage-share-title">Share</p>
          <Post thumb={post4} thumb_des="Everything related to the blue interior: focusing on furniture layout "  count="65"/>
          <Post thumb={post2} thumb_des="10 ways to decorate a vintage interior: introduction of related accessories"  count="19"/>
          <Post thumb={post6} thumb_des="Trendy studio wood interior"  count="235"/>
          <Button variant="share" >More +</Button> 
      </div>
    </div>
    );
  }
}
export default My;

