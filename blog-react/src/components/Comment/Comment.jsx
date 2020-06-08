import React from 'react'
import './comment.css'

export function Comment(props) {
    return (
        <div className='comment'>
            <img src="https://image.flaticon.com/icons/svg/702/702756.svg"/>
            <div className = 'comment-text'>
            <p style={{fontSize: '1.3rem'}}>{props.user}</p>
            <p style={{fontSize: '0.9rem'}}>{props.text}</p>
            <p style={{fontSize: '0.7rem', marginTop:'1rem'}}>{props.date}</p>
            </div>
        </div>
    )
}