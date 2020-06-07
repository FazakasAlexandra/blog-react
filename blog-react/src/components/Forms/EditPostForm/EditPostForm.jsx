import React from 'react'
import {PostForm} from '../PostForm/PostForm'

 export class EditPostForm extends React.Component {
     constructor(props){
         super(props)
     }

     render(){
         return (
            <PostForm
            title = {this.props.title}
            author = {this.props.author}
            date = {this.props.date}
            text = {this.props.text}
            buttonName = {'Submit'} 
            formClickEvent = {this.props.new}
            />
         )
     }
 }