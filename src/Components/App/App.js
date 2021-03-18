import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
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
      coursesAvailable: {},
      postCourseResponse: null
    }
  }

  async componentDidMount() {
    console.log(
      await requests.getStudents(),
      await requests.getCourses()
    )
    this.setState({coursesAvailable: await requests.getCourses()})
  }

  getSpecificStudent = async (id) => {
    let answer = await requests.getSpecificStudent(id);
    this.setState({student: answer.student})
    return answer;
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
      this.setState({postStudentResponse: `Registered ${answer.firstName} with ID ${answer.id}. Please keep your ID to log in.`});
    }
    return answer;
  }

  postCourse = async (courseId) => {
    let content = {
      studentId: this.state.student.id,
      courseId: courseId
    }
    let thePost = {
      method: `POST`,
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    }
    let answer = await requests.postCourse(thePost);
    this.setState({postCourseResponse: answer})
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
            coursesAvailable={this.state.coursesAvailable}
            student={this.state.student}
            getSpecificStudent={this.getSpecificStudent}
            postCourseResponse={this.state.postCourseResponse}
            />
          }/>
        </div>
      </Router>
    )
  }
}
