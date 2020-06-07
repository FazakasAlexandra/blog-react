import React from 'react'
import {NewPostForm} from '../NewPostForm/NewPostForm'

 export class EditPostForm extends React.Component {
     constructor(props){
         super(props)
     }

     render(){
         return (
            <NewPostForm
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