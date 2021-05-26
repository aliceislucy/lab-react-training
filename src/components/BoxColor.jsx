import React, { Component } from 'react';
// you can import styles here or anything else you'll need

// 1) variable which says hello
// 2) variable which gives you the language (de, en, es, fr)

class BoxColor extends Component {
  render() {
    function RGBToHex(r, g, b) {
      r = r.toString(16);
      g = g.toString(16);
      b = b.toString(16);

      if (r.length === 1) r = '0' + r;
      if (g.length === 1) g = '0' + g;
      if (b.length === 1) b = '0' + b;

      return '#' + r + g + b;
    };

    let textColor = "#000000"

    if ((this.props.r*0.299 + this.props.g*0.587 + this.props.b*0.114) > 186) {
        textColor = "#000000"
    } else {
        textColor = "#ffffff"
    }

    let boxRgbStyle = {
      backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`,
      color: textColor,
    };



    return (
      <div>
        <div className="BoxColor" style={boxRgbStyle}>
          rgb({this.props.r}, {this.props.g}, {this.props.b})
          <br />
          {RGBToHex(this.props.r, this.props.g, this.props.b)}
        </div>
        <div className="BoxColor"></div>
      </div>
    );
  }
}

export default BoxColor;
