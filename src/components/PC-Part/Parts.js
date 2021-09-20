import React, { Component } from 'react'

export default class Parts extends Component {
    state = {
        showInfo: false
    }

    handleShowInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        // console.log(this.props.item)

        const { id, info, partName, img } = this.props.item
        const { removeItem } = this.props

        return (
            <div className="card-part-item">
                <div className="img-container" id={id}>
                    <img src={img} alt="" />
                    <span className="close-btn" onClick={() => removeItem(id)}>x</span>

                    <div className="item-info">
                        <h4>{partName}</h4>
                        <span className="info-toggle-btn" onClick={this.handleShowInfo}>info</span>
                        {this.state.showInfo && <p>{info}</p>}
                    </div>
                </div>
            </div>
        )
    }
}
