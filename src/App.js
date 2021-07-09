
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './App.css';
import Movies from './component/Movies';


import Weather from './component/Weather';





// npm install dotenv


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityInfo: {},
      searchQuery: '',
      showingMap: false,
      weatherFore: [],
      weatherData: [],
      moviesData: [],
      

    }
  }

  getLocation = async (e) => {
    e.preventDefault();

    await this.setState({
      searchQuery: e.target.city.value
    })

    try {
      this.weatherForecast(this.state.searchQuery)
      this.getMovies(this.state.searchQuery)
      let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
      let qarr = this.state.searchQuery.split('')
      let firstchar = qarr[0].toUpperCase();
      let partofq = this.state.searchQuery.slice(1)
      let newqury = firstchar + partofq
      // console.log(newqury)
      let allData = await axios.get(url);
      let localApi = await axios.get(`${process.env.REACT_APP_SERVER}getweather?city_name=${newqury}`)
      // console.log(localApi)

      // console.log(localApi.data.data)
      this.setState({
        cityInfo: allData.data[0],
        weatherData: localApi.data,
        showingMap: true






      })

    }
    catch (error) {
      console.error(error)

    }
  }
  weatherForecast(city_name) {
    let qarr = city_name.split('')
    let firstchar = qarr[0].toUpperCase();
    let partofq = city_name.slice(1)
    let newqury = firstchar + partofq
    let current_url = `${process.env.REACT_APP_SERVER}weather_forecast?city_name=${newqury}`
    axios
      .get(current_url)
      .then(current_weather => {
        this.setState({
          weatherFore: current_weather.data
        })

      })
      .catch(error => {
        console.log(error)
      })
    // console.log(this.state.weatherFore) 
  }
  getMovies(city_name) {
    let qarr = city_name.split('')
    let firstchar = qarr[0].toUpperCase();
    let partofq = city_name.slice(1)
    let newqury = firstchar + partofq
    let current_url = `${process.env.REACT_APP_SERVER}movies?city_name=${newqury}`
    axios
      .get(current_url)
      .then(current_movies => {
        this.setState({
          moviesData: current_movies.data
        })

      })
      .catch(error => {
        console.error(error)
      })
  }
  
  render() {
    // console.log(this.state.weatherData)
    return (
      <div id='all'>
        <h1>City Explorer</h1>
        <form onSubmit={this.getLocation}>
          <input type='text' placeholder='city name' name='city' />
          <input type='submit' value='get City info' />
        </form>

        <p>City Name: {this.state.cityInfo.display_name},{this.state.cityInfo.lat},{this.state.cityInfo.lon}</p>
        <Card style={{ width: '18rem' }}
        >
          <Card.Body>
            <Card.Title> longitude :</Card.Title>
            <Card.Text>
              {this.state.cityInfo.lon}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>latitude : </Card.Title>
            <Card.Text>
              {this.state.cityInfo.lat}
            </Card.Text>
          </Card.Body>
        </Card>
        
        {
          this.state.weatherFore.map((d, key) => {
            return < Weather description={d.description} date={d.valid_date} key={key} />
          })
        }

        {this.state.showingMap &&
          <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityInfo.lat},${this.state.cityInfo.lon}&zoom=15`} />
        }
        {
          this.state.weatherData.map((d, key) => {
            return < Weather description={d.description} date={d.valid_date} key={key} />
          })
        }
        {
          this.state.moviesData.map((m, key) => {
            return <Movies title={m.title} overview={m.overview} averageVotes={m.averageVotes}
              totalVotes={m.totalVotes} imageUrl={m.imageUrl} popularity={m.popularity}
              releasedOn={m.releasedOn} key={key} />
          })
        }
       





      </div>
    )
  }
}

export default App;
