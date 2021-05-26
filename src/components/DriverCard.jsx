import React, { Component } from 'react';
// import Rating from './Rating';


class DriverCard extends Component {
  render() {

    let carModel = this.props.car[0].model;
    let carLicense = this.props.car[0].licensePlate;

    console.log(carModel);
    console.log(carLicense);


    return (
      <div className="DriverCard">
        <img src="" alt="" />
        <div>
          <p>{this.props.name}</p>
          {/* <Rating>{this.props.rating}</Rating> */}
          <p></p>
        </div>
      </div>
    );
  }
}

export default DriverCard;