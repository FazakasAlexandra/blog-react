import React from 'react';
import './Post.css'

export function Post(props) {
  const button = props.deleteMode ? (
    <button onClick={() => props.onDeleteButtonClick(props.post)} className="delete-button">
      Delete
    </button>
  ) : props.isSingle || (
    <button onClick={() => props.onViewButtonClick(props.post)}>
      View
    </button>
  );

  let homePageText = <p>{props.post.text.substring(0, 100)}...</p> 
  let viewPageText = <p>{props.post.text}</p>

  return (
    <div className="post" style={props.style}>
      <img src={props.auth === "Alexandra" ? "https://image.flaticon.com/icons/svg/1196/1196498.svg"
                                           : "https://image.flaticon.com/icons/png/512/2983/2983660.png"}/>
      <h3>{props.post.title}</h3>
      {props.page === 'home.html' || props.page === 'delete-post.html'? homePageText : viewPageText }
      {button}
    </div>
  )
}