import React, { Component } from 'react'
import {BrowserRouter as Route} from 'react-router-dom';

import './NewUsers.scss';
export default class NewUsers extends Component {
    render() {
        return (
            <div className='input-area'>
                <em><h1 className='header' id='new-users'>Register</h1></em>
                <input type='text'/>
            </div>
        )
    }
}
