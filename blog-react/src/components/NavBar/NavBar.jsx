import React from 'react'
import './navBar.css' 
import '../Fontawesome/Fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function NavBar(props) {  
    let account = <> <FontAwesomeIcon icon="user"/><span> Account</span> </>
    let accountClickEvent = props.isLoggedIn ? props.accountClickEvent : props.singInClickEvent
    
    return (
    <React.Fragment>
        <div className ='logo'>
        </div>
        <ul className ='nav-bar'>
            <li id = "one" onClick={()=>props.homeClickEvent()}><FontAwesomeIcon icon = "home"/><span> Home</span></li>
            <li id = "two"><span>About</span></li>
            <li id = "three" onClick={()=>accountClickEvent()}><span>{props.isLoggedIn ? account : 'Sign in'}</span></li>
            <span id="serach-container"><input type="text" id='search-bar' placeholder="Search..."/><FontAwesomeIcon icon = "search"/></span>
            <li id = "four" onClick={()=>props.signOutClickEvent()}><span>{props.isLoggedIn ? 'Sign out' : null}</span></li>
        </ul>
    </React.Fragment>
    )
}
