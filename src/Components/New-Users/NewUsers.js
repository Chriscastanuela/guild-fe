import React, { Component } from 'react'
import {BrowserRouter as Route} from 'react-router-dom';

import './NewUsers.scss';
export default class NewUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
    }
    
    formUpdate(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    
    render() {
        return (
            <div className='input-area'>
                <em><h1 className='header' id='new-users'>Register</h1></em>
                <input type='text' placeholder='First Name' name='firstName' value={this.state.firstName} onChange={() => this.formUpdate()} autoComplete='off'/>
                <input type='text' placeholder='Last Name' name='lastName' value={this.state.lastName} onChange={() => this.formUpdate()} autoComplete='off'/>
                <input type='text' placeholder='Email' name='email' value={this.state.email} onChange={() => this.formUpdate()} autoComplete='off'/>
                <input type='button' value='Submit' onClick={() => this.props.postStudent()}/>
            </div>
        )
    }
}
