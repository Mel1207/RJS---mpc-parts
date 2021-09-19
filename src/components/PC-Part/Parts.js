import React, { Component } from 'react'

export default class Parts extends Component {
    render() {
        // console.log(this.props.item)

        const { id, info, partName, img } = this.props.item
        const { removeItem } = this.props

        return (
            <div className="part-item">
                <div className="img-container">
                    <img src={img} alt="" />
                </div>
            </div>
        )
    }
}
