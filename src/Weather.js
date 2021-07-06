import React  from 'react'

export class Weather extends React.Component {
    render() {
        return (
            <div>
               <h6>{this.props.date}</h6> 
                <h3>{this.props.description}</h3> 

            </div>
        )
    }
}

export default Weather