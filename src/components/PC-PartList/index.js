import React, { Component } from 'react'
import Parts from '../PC-Part/Parts'
import { partsData } from '../../partsData'

export default class PartsList extends Component {
    state = {
        parts: partsData
    };

    removeItem = id => {
        // console.log(id);

        const { parts } = this.state;
        const sortedParts = parts.filter(part => part.id !== id)
        this.setState({
            parts: sortedParts
        })
    }

    render() {
        // console.log(this.state.parts)
        // console.log(this.state)

        const { parts } = this.state;

        // console.log(parts)

        return (
            <div className="container container-part">
                {
                    parts.map(item => (<Parts key={item.id} item={item} removeItem={this.removeItem}></Parts>))
                }
            </div>
        )
    }
}
