import React from 'react'
import './navBar.css'
import { SearchBar} from '../SearchBar/SearchBar'
import '../Fontawesome/Fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { render } from '@testing-library/react'

export class NavBar extends React.Component{
    constructor(props){
    super(props)
    this.state={
        viewMenu: false
     }
    }

    showSeachBar(){
        switch(this.props.page){
            case'home.html':
            return  <SearchBar search={this.props.search}/>
            
            case 'edit-post.html' :
            return  <SearchBar search={this.props.search}/>
            
            case 'delete-post.html' :
            return <SearchBar search={this.props.search}/>

            default : 
            return null
        }
    }

        smallView = ()=>{
            let accountClickEvent = this.props.isLoggedIn ? this.props.accountClickEvent : this.props.singInClickEvent
            let style = {
                display : this.state.viewMenu ? 'block' : 'none'
            }
            return (
            <div id='li-wraper-small' style={style}>
                <li id="one" onClick={() => this.props.homeClickEvent()}>Home</li>
                <li id="two" onClick={()=> this.props.aboutClickEvent()}>About</li>
                <li id="three" onClick={() => accountClickEvent()}><span>{this.props.isLoggedIn ? 'Account' : 'Sign in'}</span></li>
                <li id="four" onClick={() => this.props.signOutClickEvent()}><span>{this.props.isLoggedIn ? 'Sign out' : null}</span></li>
                {this.showSeachBar()}
                <FontAwesomeIcon icon="times" id="close-menu" onClick={()=>this.setState({viewMenu: false})}/>
            </div>
            )
        }

        render(){
            let liWraperClass= this.state.viewMenu ? 'li-wraper-small' : 'li-wraper'
            let account = <> <FontAwesomeIcon icon="user" /><span> Account</span> </>
            let accountClickEvent = this.props.isLoggedIn ? this.props.accountClickEvent : this.props.singInClickEvent
        return (
            <React.Fragment>
                <ul className='nav-bar' style={this.props.page === 'account.html' ? { paddingBottom: '0.9rem' } : null}>
                    <div id='li-wraper'>
                        <li id="one" onClick={() => this.props.homeClickEvent()}><FontAwesomeIcon icon="home" /><span> Home</span></li>
                        <li id="two" onClick={()=> this.props.aboutClickEvent()}><span>About</span></li>
                        <li id="three" onClick={() => accountClickEvent()}><span>{this.props.isLoggedIn ? account : 'Sign in'}</span></li>
                        {this.showSeachBar()}
                        <li id="four" onClick={() => this.props.signOutClickEvent()}><span>{this.props.isLoggedIn ? 'Sign out' : null}</span></li>
                    </div>
                    <FontAwesomeIcon icon='bars' id="bars" onClick={()=> {this.setState({viewMenu:true})}}/>
                    {this.state.viewMenu ? this.smallView() : null}
                </ul>
            </React.Fragment>
        )
        }
}
