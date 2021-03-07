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

  render() {
    return (
      <div>
        {/* <h1 className='header' id='header-main'><em>Guild Registration</em></h1> */}
        <h1 className='header' id='header-main'>Guild Registration</h1>
        <input type='button' className='button' id='new-users'/>
        <input type='button' className='button' id='existing-users'/>
      </div>
    )
  }
}
