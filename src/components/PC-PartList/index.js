import React, { Component } from 'react'
import Parts from '../PC-Part/Parts'

export default class PartsList extends Component {
    render() {
        return (
            <div className="container">
                <h1>this is Parts list container </h1>
                <Parts />
            </div>
        )
    }
}
