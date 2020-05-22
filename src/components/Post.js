import React from 'react';
import like from '../img/like.png';
import likeChecked from '../img/likeChecked.png';
import share from '../img/share.png'

const like_image = {
  like : like,
  likeChecked : likeChecked
}

class Post extends React.Component {
  state = {
    open : true
  }
  toggleImage = () =>{
    this.setState(state => ({open:!state.open}))
  }
  getImageName = () => this.state.open ? 'like' : 'likeChecked'

  render (){
    const imageName = this.getImageName();
    return (
      <div className="post" id="post-1">
                <img className="post-thumb" src = {this.props.thumb} alt = "post1"/>
                <div className="post-footer">
                  <img src = {share} className="share" alt = "share"/>
                  <img onClick={this.toggleImage} src = {like_image[imageName]} className="like" alt = "heart"/>
                  <div className="count-num">{this.props.count}</div>
                </div>
                <p>{this.props.thumb_des}</p>
      </div>
    )
  }

}

export default Post;
