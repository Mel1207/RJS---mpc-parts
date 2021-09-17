import React, { Component } from 'react'
import './sass/main.css'
import NavbarComponent from './components/navbar/NavbarComponent'
import PartsList from './components/PC-PartList'


export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <PartsList />
      </div>
    )
  }
}
