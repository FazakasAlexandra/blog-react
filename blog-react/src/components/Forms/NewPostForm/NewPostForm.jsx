import React from 'react'
import {PostForm} from '../PostForm/PostForm'
import './newPostForm.css'

export class NewPostForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <PostForm
            title = {this.props.title}
            author = {this.props.author}
            text = {this.props.text}
            buttonName = {'Post'}
            formClickEvent = {this.props.postNewClick}
            />
        )
    }
}