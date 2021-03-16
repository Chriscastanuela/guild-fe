import React, { Component } from 'react';
import {BrowserRouter as Route} from 'react-router-dom';

import './ExistingUsers.scss'

export default class ExistingUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    course = (a) => {
        return (
            <div>
                <ul>
                    {console.log(a.id)}
                    <li>{`ID: ${a.id}`}</li>
                    <li>{`Name: ${a.name}`}</li>
                    <li>{`Time: ${a.time}`}</li>
                </ul>
            </div>
        )
    }
    
    render() {
        return (
            <section className='sign-up-field'>
                <section className='sign-up-area' id='left'>
                    <h2 className='available-courses'>Available Courses</h2>
                    {
                        this.props.coursesAvailable.courses ? 
                        this.props.coursesAvailable.courses.map(a => 
                            (
                                <div className='course'>
                                    <ul className='list'>
                                        {console.log(a.id)}
                                        <li>{`ID: ${a.id}`}</li>
                                        <li>{`Name: ${a.name}`}</li>
                                        <li>{`Time: ${a.time}`}</li>
                                    </ul>
                                </div>
                            )
                        )
                        : null
                    }
                </section>
                <section className='sign-up-area' id='right'></section>
            </section>
        )
    }
}
