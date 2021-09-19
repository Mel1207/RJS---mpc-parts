import React, { Component } from 'react'

export default class Parts extends Component {
    render() {
        // console.log(this.props.item)

        const { id, info, partName, img } = this.props.item
        const { removeItem } = this.props

        return (
            <div className="card-part-item">
                <div className="img-container" id={id}>
                    <img src={img} alt="" />
                    <span className="close-btn">x</span>

                    <div className="item-info">
                        <h4>{partName}</h4>
                        <span className="info-toggle-btn">info</span>
                        <p>{info}</p>
                    </div>
                </div>
            </div>
        )
    }
}
