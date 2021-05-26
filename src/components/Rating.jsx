import React, { Component } from 'react';
// you can import styles here or anything else you'll need

// 1) variable which says hello
// 2) variable which gives you the language (de, en, es, fr)

class Rating extends Component {
  render() {

    let propsRating = this.props.children
    let starRating = "No ratings yet"
    
    if(propsRating < 0.5){
        starRating = "☆☆☆☆☆"
    } else if(propsRating < 1.5) {
        starRating = "★☆☆☆☆"
    } else if(propsRating < 2.5) {
        starRating = "★★☆☆☆"
    } else if(propsRating < 3.5) {
        starRating = "★★★☆☆"
    } else if(propsRating < 4.5) {
        starRating = "★★★★☆"
    } else if(propsRating >= 4.5) {
        starRating = "★★★★★"
    }

    return (
      <div className="Rating">{starRating}</div>
    );
  }
}

export default Rating;