import React, { Component } from 'react'
// you can import styles here or anything else you'll need

// 1) variable which says hello
// 2) variable which gives you the language (de, en, es, fr)

class Greetings extends Component {
    render() {
        let greet = "";
        let language = this.props.lang;
        switch(language){
            default:
                greet = "yo";
                break;
            case "de":
                greet = "Hallo";
                break;
            case "en":
                greet = "Hello";
                break;
            case "fr":
                greet = "Bonjour";
                break;
            case "es":
                greet = "Halo";
                break;
        }

        return (
            <div className="Greetings">
                {greet} {this.props.children}
            </div>
        )
    }
}

export default Greetings

