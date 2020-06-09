import React from 'react';
import './Post.css'
import '../Fontawesome/Fontawesome'
import { FetchApi } from '../../classes/FetchApi'
import { Comment } from '../Comment/Comment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Post extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      comments: []
    }
  }

  async componentDidMount() {
    let fetchApi = new FetchApi('http://localhost:3000')
    let response = await fetchApi.getComments(this.props.post.id)
    this.setState({comments: response})
  }

  newPostComment = async (comment) => {
    console.log(comment)
    let fetchApi = new FetchApi('http://localhost:3000')
    let response = await fetchApi.newComment(this.props.post.id, comment)

    return response 
  }

  handleCommentClick = async(event) => {
    let user = this.props.isAuth ? 'admin' : document. getElementById('comment-user').value
    console.log(user)
    let text = document.getElementById('comment-textarea').value
    let newComment = await this.newPostComment({user, text})

    this.setState({comments : [...this.state.comments, newComment]})
  }

  choseButton() {
    let button;

    if (this.props.page === 'home.html') {
      button = <button 
                 onClick={() => this.props.postViewClick(this.props.post)}>
                 View
                </button>

    } else if (this.props.editMode) {
      button = <button onClick={() => 
                 this.props.postEditClick(this.props.post)} 
                 className="edit-button">
                 Edit
               </button>
               
    } else if (this.props.deleteMode) {
      button = <button 
                 onClick={() => this.props.postDeleteClick(this.props.post)} 
                 className="delete-button">
                <FontAwesomeIcon icon='trash-alt' id="trash-icon"/>
               </button>
    }

    return button
  }

  choseTextLength(){
    let homePageText = <p className='post-text'>{this.props.post.text.substring(0, 100)}...</p>
    let viewPageText = <p className='post-text-view'>{this.props.post.text}</p> 
    let length;
    
    if(this.props.page === 'home.html' || this.props.page === 'delete-post.html' || this.props.page === 'edit-post.html'){
      length = homePageText
    } else {
      length = viewPageText
    }
    
    return length
  } 

  getCommentComponents(){
    console.log(this.state.comments)
    const commentComponents = this.state.comments.map((comment) => {
      return(<Comment
        user={comment.user}
        text={comment.text}
        date={comment.date}
      />)
    })

    return commentComponents
  }

  getCommentSection() {
      let commentComponents = this.getCommentComponents()
      return (
        <div className='comment-section-wraper'>
          <div className='comments-wraper'>
            {commentComponents}
          </div>
        </div>
      )
  }

  isViewPost(){
    if (this.props.page === 'view-post.html') {
      return (
        <>
          <div className = "new-comment-section">
          {this.props.isAuth ? null : <input type="text" id ="comment-user" placeholder="Name"/>}
          <div className="textarea-container">
          <textarea id="comment-textarea"></textarea>
          <FontAwesomeIcon icon={'plus-square'} id="add-comment-icon" onClick={this.handleCommentClick}/>
          </div>
          </div>
          {this.getCommentSection()}
        </>
      )
    }
  }
  
  render(){
  const comments = this.isViewPost()
  const button = this.choseButton()
  return (
    <div className="post">
      <img src={this.props.auth === "Alexandra" ? "https://image.flaticon.com/icons/svg/1196/1196498.svg"
                                                : "https://image.flaticon.com/icons/png/512/2983/2983660.png"} />
      <h3>{this.props.post.title}</h3>
      {this.choseTextLength()}
      {comments}
      {button}
    </div>
  )
  }
}