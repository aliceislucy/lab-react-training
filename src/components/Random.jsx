import React, { Component } from 'react';
// you can import styles here or anything else you'll need

// 1) variable which says hello
// 2) variable which gives you the language (de, en, es, fr)

class Random extends Component {
  render() {

    function randomValue(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    return (
      <div className="Random">
        Random value between {this.props.min} and {this.props.max} => {randomValue(this.props.min, this.props.max)}
      </div>
    );
  }
}

export default Random;
