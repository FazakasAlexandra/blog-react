import React from 'react';
import './Post.css'

export function Post(props) {
  const button = props.isSingle && props.isAuth ? (
    <button onClick={() => props.onEditButtonClick(props.post)}>
      Edit
    </button>
  ) : props.isSingle || (
    <button onClick={() => props.onViewButtonClick(props.post)}>
      View
    </button>
  );
  
  return (
    <div className="post" style={props.style}>
      <img src="https://image.flaticon.com/icons/svg/1196/1196498.svg"/>
      <h3>{props.post.title}</h3>
      <p>{props.post.text}</p>
      {button}
    </div>
  )
}