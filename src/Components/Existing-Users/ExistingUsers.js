import React, { Component } from 'react';
import {BrowserRouter as Route} from 'react-router-dom';

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
                <em><h1 className='header' id='new-users'>Sign Up</h1></em>
            </div>
        )
    }
}
