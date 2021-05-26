import React, { Component } from 'react'

class NumbersTable extends Component {
    render() {

        let numberArray = []
    
        for (let i = 1; i <= this.props.limit; i++) {
            numberArray.push(i)
        }
        
        return (
            <div>
                {numberArray.forEach(number => {
                    return <div>{number}</div>
                })}
            </div>
        )
    }
}


export default NumbersTable;