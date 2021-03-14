import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from 'react-router-dom';
import React, { Component } from 'react';

import './App.scss';
import NewUsers from '../New-Users/NewUsers'

import requests from '../../APICalls/Get-Info';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      student: null
    }
  }

  async componentDidMount() {
    console.log(
      await requests.getStudent('aaa')
    )
  }

  getStudent() {
    //
    this.setState({student: null})
  }

  getCourse() {
    //
  }

  postStudent = (first, last, email, courses) => {
    let content = {
      firstName: first,
      lastName: last,
      email: email,
      courses: courses
    }
    let thePost = {
      method: `POST`,
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    }
    requests.postStudent(thePost)
  }

  // postCourse = () => {
  //   //
  // }

  render() {
    return (
      <Router>
        <div className='app'>
          <NavLink to='/' className='links' id='header-link'>
            <em><h1 className='header' id='header-main'>School Registration</h1></em>
          </NavLink>
          <Route exact path='/' render={(props) => (
            <React.Fragment>
              <section className='button-area'>
                <NavLink to='/new-users'>
                  <input type='button' className='buttons' id='new-users' value='New Users'/>
                </NavLink>
                <NavLink to='/existing-users'>
                  <input type='button' className='buttons' id='existing-users' value='Existing Users'/>
                </NavLink>
              </section>
            </React.Fragment>
          )}/>
          <Route path='/new-users' render={props => (
            <NewUsers/>
          )}/>
        </div>
      </Router>
    )
  }
}
