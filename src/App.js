import React, { Component } from 'react'
import './sass/main.css'
import NavbarComponent from './components/navbar/NavbarComponent'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        app body
      </div>
    )
  }
}
