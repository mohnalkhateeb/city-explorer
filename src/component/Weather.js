import React  from 'react'
import WeatherDay from './WeatherDay'

export class Weather extends React.Component {
    render() {
        return (
            <div>
               {
          this.props.weatherData.map((d,key)=>{

            return < WeatherDay description={d.description} date={d.valid_date} key={key} />
          })
        }

            </div>
        )
    }
}

export default Weather