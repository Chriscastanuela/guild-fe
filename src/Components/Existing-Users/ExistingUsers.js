import React, { Component } from 'react';
import {BrowserRouter as Route} from 'react-router-dom';

import './ExistingUsers.scss'

export default class ExistingUsers extends Component {
    render() {
        return (
            <section className='sign-up-field'>
                <section className='sign-up-area' id='left'></section>
                <section className='sign-up-area' id='right'></section>
            </section>
        )
    }
}
