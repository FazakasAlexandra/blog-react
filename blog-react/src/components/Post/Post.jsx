import React from 'react';
import './Post.css'
import '../Fontawesome/Fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Post(props) {
  const button = choseButton()
  console.log(button)

  function choseButton() {
    let button;

    if (props.page === 'home.html') {
      button = <button 
                 onClick={() => props.postViewClick(props.post)}>
                 View
                </button>

    } else if (props.editMode) {
      button = <button onClick={() => 
                 props.postEditClick(props.post)} 
                 className="edit-button">
                 Edit
               </button>
               
    } else if (props.deleteMode) {
      button = <button 
                 onClick={() => props.postDeleteClick(props.post)} 
                 className="delete-button">
                <FontAwesomeIcon icon='trash-alt'/>
               </button>
    }

    return button
  }

  function choseTextLength(){
    let homePageText = <p>{props.post.text.substring(0, 100)}...</p>
    let viewPageText = <p>{props.post.text}</p> 
    let length;
    
    if(props.page === 'home.html' || props.page === 'delete-post.html' || props.page === 'edit-post-section-one.html'){
      length = homePageText
    } else {
      length = viewPageText
    }
    
    return length
  } 

  return (
    <div className="post" style={props.style}>
      <img src={props.auth === "Alexandra" ? "https://image.flaticon.com/icons/svg/1196/1196498.svg"
                                           : "https://image.flaticon.com/icons/png/512/2983/2983660.png"} />
      <h3>{props.post.title}</h3>
      {choseTextLength()}
      {button}
    </div>
  )
}