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
                <input type='text'/>
            </div>
        )
    }
}
