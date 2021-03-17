import React, { Component } from 'react'
import {BrowserRouter as Route} from 'react-router-dom';

import './NewUsers.scss';
export default class NewUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
        }
    }
    
    setStateFromForm(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    
    render() {
        return (
            <section className='input-area'>
                <em><h1 className='header' id='register-here'>Register Here</h1></em>
                <input 
                type='text' 
                placeholder='First Name' 
                name='firstName' 
                value={this.state.firstName} 
                onChange={(e) => this.setStateFromForm(e)} 
                autoComplete='off'
                />
                <input 
                type='text' 
                placeholder='Last Name' 
                name='lastName' 
                value={this.state.lastName} 
                onChange={(e) => this.setStateFromForm(e)} 
                autoComplete='off'
                />
                <input 
                type='text'
                placeholder='Email' 
                name='email' 
                value={this.state.email} 
                onChange={(e) => this.setStateFromForm(e)} 
                autoComplete='off'
                />
                <input 
                type='button' 
                value='Submit' 
                onClick={
                    () => this.props.postStudent(this.state.firstName, this.state.lastName, this.state.email)
                }
                className='button'
                />
                <p>{this.props.postStudentResponse}</p>
            </section>
        )
    }
}
