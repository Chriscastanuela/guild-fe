import React, { Component } from 'react';
import {BrowserRouter as Route} from 'react-router-dom';

import requests from '../../APICalls/Get-Info'

import './ExistingUsers.scss'

export default class ExistingUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            classId: null,
        }
    }

    componentDidMount = () => {
        //
    }

    setStateFromForm(e) {
        this.setState({[e.target.name]: e.target.value});
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
                <section className='sign-up-area' id='right'>
                    {
                        this.props.student == null ? (
                            <span><h2 className='available-courses'>Login</h2>
                            <input 
                            type='text'
                            placeholder='ID' 
                            name='id'
                            value={this.state.id}
                            onChange={(e) => this.setStateFromForm(e)} 
                            autoComplete='off'
                            /> 
                            <input 
                            type='button' 
                            value='Submit' 
                            onClick={() => this.props.getSpecificStudent(this.state.id)}
                            className='button'
                            /></span>
                        ) : (
                            <span><h2 className='available-courses'>Sign up for a Class, {this.props.student.firstName}!</h2>
                            <input 
                            type='text'
                            placeholder='ID' 
                            name='classId'
                            value={this.state.classId}
                            onChange={(e) => this.setStateFromForm(e)} 
                            autoComplete='off'
                            /> 
                            <input 
                            type='button' 
                            value='Submit' 
                            onClick={() => this.props.getSpecificStudent(this.state.id)}
                            className='button'
                            /></span>
                        )
                    }
                </section>
            </section>
        )
    }
}
