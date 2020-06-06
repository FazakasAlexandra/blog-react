import './sign-in-form.css'
import './invalid-inputs.css'
import './valid-inputs.css'
import React, { Component } from 'react'
import '../../Fontawesome/Fontawesome'
//import '../Fontawesome/Fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function setLocalStorage(name, password) {
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
}

export class SignInForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameClass: 'sign-in-form-user',
            passClass: 'sign-in-form-pass',
            name: '',
            password: '',
            nameError: '',
            passwordError: '',
            signedIn: false
        }
    }

    handleChange = (event) => {
        let { name, value } = event.target

        switch (name) {
            case 'name':
                this.setState({ name: value })
                this.setState({ nameClass: 'sign-in-form-user' })
                break

            case 'password':
                this.setState({ password: value })
                this.setState({ passClass: 'sign-in-form-pass' })
                break
        }
    }

    handleSignIn = () => {
        let valid = this.checkErrors()
        if (valid) {
            this.setState({ signedIn: true }, () => {
                (this.props.signIn(this.state.signedIn))
            })
            console.log('succesfully signed in!')
            setLocalStorage(this.state.password, this.state.name)
        }
        console.log(valid)
    }

    checkErrors() {
        let valid = true
        let { name, password } = this.state
        if (name !== 'admin' && password !== 'admin' || name === "" && password === "") {
            console.error('no admin')
            this.setState({ nameError: this.state.name, nameClass: "sign-in-form-user-invalid" })
            this.setState({ passwordError: this.state.password, passClass: "sign-in-form-pass-invalid" }, () => {
                console.log(this.state.nameError)
            })
            valid = false
        } else if (password !== 'admin') {
            this.setState({ passwordError: this.state.password, passClass: "sign-in-form-pass-invalid" }, () => {
                console.log(this.state.passwordError)
            })
            valid = false
        } else if (name !== 'admin') {
            this.setState({ nameError: this.state.name, nameClass: "sign-in-form-user-invalid" }, () => {
                console.log(this.state.nameError)
            })
            valid = false
        }

        return valid
    }

    render() {
        return (
            <div className="sign-in-form-wraper">
                <form className="sign-in-form">
                    <div className={this.state.nameClass}>
                        <FontAwesomeIcon icon="user" id={`${this.state.nameClass}-icon`} />
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className={this.state.passClass}>
                        <FontAwesomeIcon icon="key" id={`${this.state.passClass}-icon`} />
                        <input type="password"
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <button type="button" onClick={() => this.handleSignIn()}>Sign in</button>
                </form>

                <div className="sign-in-form-image">
                    <img src="https://image.freepik.com/free-vector/login-concept-illustration_114360-739.jpg" />
                </div>

            </div>
        )
    }
}