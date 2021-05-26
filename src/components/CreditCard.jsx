import React, { Component } from 'react';
// you can import styles here or anything else you'll need

// 1) variable which says hello
// 2) variable which gives you the language (de, en, es, fr)

class CreditCard extends Component {
  render() {
    let cardImg;
    if (this.props.type === 'Master Card') {
      cardImg = '/img/master-card.svg';
    } else {
      cardImg = '/img/visa.png';
    }

    let numberLastDigits = this.props.number.slice(
      this.props.number.length - 4
    );

    let month = this.props.expirationMonth;
    if (month < 10) {
      month = '0' + month;
    }

    let year = this.props.expirationYear.toString();
    year = year[2] + year[3];

    let cardStyle = {
      backgroundColor: this.props.bgColor,
      color: this.props.color,
    };

    return (
      
      <div className="CreditCard" style={cardStyle}>
        <img src={cardImg} alt="card logo" />
        <div className="CreditCard_div">•••• •••• •••• {numberLastDigits}</div>
        <p>
          Expires {month}/{year}
        </p>
        <p>{this.props.bank}</p>
        <p>{this.props.owner}</p>
      </div>
  
    );
  }
}

export default CreditCard;
