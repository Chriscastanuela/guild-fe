import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from 'react-router-dom';
import React, { Component } from 'react';

import './App.scss';

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

  async getStudent() {
    //
  }

  async getCourse() {
    //
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <NavLink to='/' className='links' id='header-link'>
            <em><h1 className='header' id='header-main'>Guild Registration</h1></em>
          </NavLink>
          <Route exact path='/' render={(props) => (
            <React.Fragment>
              {/* <Main /> */}
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
        </div>
      </Router>
    )
  }
}
