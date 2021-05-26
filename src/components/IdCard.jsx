import React, { Component } from 'react'
// you can import styles here or anything else you'll need



class IdCard extends Component {
    render() {
        return (
            <div className="IdCard">
                <img src={this.props.picture} alt="" />
                <div>
                <div><b>First name :</b> {this.props.firstName}</div>
                <div><b>Last name :</b> {this.props.lastName}</div>
                <div><b>Gender :</b> {this.props.gender}</div>
                <div><b>Height:</b> {this.props.height/100}m</div>
                <div><b>Birth :</b> {this.props.birth.toDateString()}</div>
                </div>                         
            </div>
        )
    }
}

export default IdCard

