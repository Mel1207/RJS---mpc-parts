import React, { Component } from 'react'
import './sass/main.css'
import NavbarComponent from './components/navbar/NavbarComponent'
import PcList from './components/PC-List/PcList'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        app body
        <PcList />
      </div>
    )
  }
}
