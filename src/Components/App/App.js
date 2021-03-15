import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from 'react-router-dom';
import React, { Component } from 'react';

import './App.scss';
import NewUsers from '../New-Users/NewUsers'
import ExistingUsers from '../Existing-Users/ExistingUsers'

import requests from '../../APICalls/Get-Info';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      student: null,
      postStudentResponse: '',
      coursesAvailable: {}
    }
  }

  async componentDidMount() {
    console.log(
      await requests.getStudents(),
      await requests.getCourses()
    )
    this.setState({coursesAvailable: await requests.getCourses()})
  }

  postStudent = async (first, last, email) => {
    let content = {
      firstName: first,
      lastName: last,
      email: email,
    }
    let thePost = {
      method: `POST`,
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    }
    let answer = await requests.postStudent(thePost);
    if (answer.error) {
      this.setState({postStudentResponse: answer.error});
    } else {
      this.setState({student: answer});
      this.setState({postStudentResponse: `Registered ${answer.firstName}`});
    }
    console.log(answer);
    return answer;
  }

  postCourse = (studentId, courseId) => {
    let content = {
      studentId: studentId,
      courseId: courseId
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

  render() {
    return (
      <Router>
        <div className='app'>
          <NavLink to='/' className='links' id='header-link'>
            <section className='header'>
              <em><h1 className='header-title' id='header-main'>School Registration</h1></em>
              <NavLink to='/new-users'>
                <input type='button' className='buttons' id='new-users' value='New Users'/>
              </NavLink>
              <NavLink to='/existing-users'>
                <input type='button' className='buttons' id='existing-users' value='Existing Users'/>
              </NavLink>
            </section>
          </NavLink>
          <Route 
          path='/new-users' 
          render={props =>
            <NewUsers 
            postStudent={this.postStudent} 
            postStudentResponse={this.state.postStudentResponse}
            clearInputs={this.clearInputs}
            />
          }
          />
          <Route 
          path='/existing-users' 
          render={props => 
            <ExistingUsers 
            postCourse={this.postCourse}
            getTheCourses={this.getTheCourses}
            />
          }/>
        </div>
      </Router>
    )
  }
}
