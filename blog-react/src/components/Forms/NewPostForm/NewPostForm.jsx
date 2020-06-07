import React from 'react'
import './newPostForm.css'

export class NewPostForm extends React.Component {
    constructor(props) {
        super(props)
    }

    getInputs = () => {
        let title = document.getElementById('title-input').value
        let author = document.getElementById('author-input').value
        let date = document.getElementById('date-input').value
        let text = document.getElementById('text-input').value

        let post = {
            title : title === "" ? 'No title' : title,
            author : author === "" ? 'Anonymous' : author,
            date,
            text,
        }

        this.props.formClickEvent(post)
    }

    render() {
        return (
            <form className="post-form">

                <div className="top-wraper">
                    <div className="top-input-wraper">
                        <label htmlFor="title" id="title"> Title</label>
                        <input type="text" name="title" id="title-input" defaultValue={this.props.title}/>
                    </div>

                    <div className="top-input-wraper">
                        <label htmlFor="author"> Author </label>
                        <input type="text" name="author" id="author-input" defaultValue={this.props.author}/>
                    </div>

                    <div className="top-input-wraper" id="no-left-padding">
                        <label htmlFor="date"> Date </label>
                        <input type="text" id="date-input" defaultValue ={this.props.date}/>
                    </div>
                </div>

                <textarea type="text" name="text" id="text-input" defaultValue={this.props.text}></textarea>

                <button onClick={(event) => this.getInputs(event.target)} type='button'><span> {this.props.buttonName} </span></button>
            </form>
        )
    }
}