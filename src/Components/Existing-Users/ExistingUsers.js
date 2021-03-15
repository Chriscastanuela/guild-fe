import React, { Component } from 'react';
import {BrowserRouter as Route} from 'react-router-dom';

import './ExistingUsers.scss'

export default class ExistingUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //
        }
    }
    
    formUpdate(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <em><h1 id='sign-up'>Sign Up</h1></em>
            </div>
        )
    }
}
