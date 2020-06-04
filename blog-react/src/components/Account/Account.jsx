import React from 'react'
import './account.css'
import '../Fontawesome/Fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Account(props) {
    return(
        <div className = "account">
            <div className = "user-image">
            <div className = "controls">
                <button id="new-post" onClick={()=>props.postClickEvent()}><FontAwesomeIcon icon={'plus-square'}/> Post</button>
                <button id="edit-post" onClick={()=>props.editClickEvent()}><FontAwesomeIcon icon={'edit'}/> Edit</button>
                <button id="delete-post" onClick={()=>props.deleteClickEvent()}><FontAwesomeIcon icon={'trash-alt'}/> Delete</button>
            </div>
            </div>
        </div>
    )
}