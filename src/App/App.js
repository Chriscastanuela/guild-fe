import React, { Component } from 'react';

import './App.scss';

import requests from '../APIcalls/Get-Info';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className='header' id='main'>Guild Registration</h1>
      </div>
    )
  }
}
