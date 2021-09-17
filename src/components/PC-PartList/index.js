import React, { Component } from 'react'
import Parts from '../PC-Part/Parts'
import { partsData } from '../../partsData'

export default class PartsList extends Component {
    state = {
        parts: partsData
    };

    render() {
        console.log(this.state.parts)

        return (
            <div className="container">
                <h1>this is Parts list container </h1>
                <Parts />
            </div>
        )
    }
}
