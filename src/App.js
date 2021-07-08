
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import  './App.css';


// import Weather from './Weather';





// npm install dotenv


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityInfo: {},
      searchQuery: '',
      showingMap: false,

      // weatherData:[]

    }
  }

  getLocation = async (e) => {
    e.preventDefault();

    await this.setState({
      searchQuery: e.target.city.value
    })
    try{
    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;


    // let LocalApi= await axios.get('http://localhost:3001/getweather?city_name=Seattle&lat=47.60621&lon=-122.33207')





    let allData = await axios.get(url);


    this.setState({
      cityInfo: allData.data[0],
      showingMap: true,


      // weatherData:LocalApi.data


    })
  }
  catch (error){
    console.error(error)
  }

  }

  render() {
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

        {this.state.showingMap &&
          <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityInfo.lat},${this.state.cityInfo.lon}&zoom=15`} />
        }


        {/* {
          this.state.weatherData.map(d=>{
            return < Weather description={d.description} date={d.date} />
          })
        } */}




      </div>
    )
  }
}

export default App;
