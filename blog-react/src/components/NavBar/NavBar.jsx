import React from 'react'
import './navBar.css'
import { SearchBar} from '../SearchBar/SearchBar'
import '../Fontawesome/Fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function NavBar(props){

    function showSeachBar(){
        switch(props.page){
            case'home.html':
            return  <SearchBar search={props.search}/>
            
            case 'edit-post.html' :
            return  <SearchBar search={props.search}/>
            
            case 'delete-post.html' :
            return <SearchBar search={props.search}/>

            default : 
            return null
        }
    }
        let account = <> <FontAwesomeIcon icon="user" /><span> Account</span> </>
        let accountClickEvent = props.isLoggedIn ? props.accountClickEvent : props.singInClickEvent

        return (
            <React.Fragment>
                <div className='logo'>
                </div>
                <ul className='nav-bar' style={ props.page === 'account.html' ? {paddingBottom:'0.9rem'} : null}>
                    <li id="one" onClick={() => props.homeClickEvent()}><FontAwesomeIcon icon="home" /><span> Home</span></li>
                    <li id="two"><span>About</span></li>
                    <li id="three" onClick={() => accountClickEvent()}><span>{props.isLoggedIn ? account : 'Sign in'}</span></li>
                    {showSeachBar()}
                    <li id="four" onClick={() => props.signOutClickEvent()}><span>{props.isLoggedIn ? 'Sign out' : null}</span></li>
                </ul>
            </React.Fragment>
        )
    }
