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
        <h1 className='header' id='main'>Guild Registration</h1>
      </div>

    )
  }
}
