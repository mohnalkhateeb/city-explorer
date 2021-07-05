import React, { Component } from 'react'

export class Weather extends Component {
    render() {
        return (
            <div>
               <h5>{this.props.date}</h5> 
                <h1>{this.props.description}</h1> 

            </div>
        )
    }
}

export default Weather