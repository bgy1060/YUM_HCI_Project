import React from 'react';
import like from '../img/like.png';
import likeChecked from '../img/likeChecked.png';
import share from '../img/share.png'
import kakao from '../img/share-kakao.png'
import face from '../img/share-facebook.png'
import link from '../img/share-link.png'
import './Post.css'
import { Modal } from 'react-bootstrap';

const like_image = {
  like : like,
  likeChecked : likeChecked
}

class Post extends React.Component {
  constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
      show: false,
      open: true
		};
	}

  toggleImage = () =>{
    this.setState(state => ({open:!state.open}))
  }
  getImageName = () => this.state.open ? 'like' : 'likeChecked'

  handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
  }
  
  render (){
    const imageName = this.getImageName();
    return (
      <div className="post"id="post-1">
        <img className="post-thumb" src = {this.props.thumb} alt = "post1"/>
        <div className="post-footer">

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Share the interior with more friends!</Modal.Title>
					</Modal.Header>
					<Modal.Body>
            <img alt="kakao" src={kakao}></img>
            <p className="kakao-title">Kakao</p> 
            <img alt="face" src={face}></img>
            <p className="facebook-title">FaceBook</p> 
            <img alt="link" src={link}></img>
            <p className="link-title">Link copy</p> 
          </Modal.Body>
					<Modal.Footer>
					</Modal.Footer>
				</Modal>
          <img variant="primary" onClick={this.handleShow} src = {share} className="share" alt = "share"/>
          <img onClick={this.toggleImage} src = {like_image[imageName]} className="like" alt = "heart"/>
          <div className="count-num">{this.props.count}</div>
        </div>
        <a href="https://post.naver.com/viewer/postView.nhn?volumeNo=28171885" >{this.props.thumb_des}</a>
      </div>
    )
  }
}

export default Post;
