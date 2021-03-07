import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import React, { Component } from 'react';

import './App.scss';

import requests from '../APICalls/Get-Info';

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
      <div className='app'>
        <h1 className='header' id='header-main'>Guild Registration</h1>
        <section className='button-area'>
          <input type='button' className='buttons' id='new-users' value='New Users'/>
          <input type='button' className='buttons' id='existing-users' value='Existing Users'/>
        </section>
      </div>
    )
  }
}
