
import React from 'react';
import axios from 'axios';
import  './App.css';
// npm install dotenv


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityInfo: {},
      searchQuery: '',
      showingMap: false
    }
  }

  getLocation = async (e) => {
    e.preventDefault();

    await this.setState({
      searchQuery: e.target.city.value
    })

    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;

    let allData = await axios.get(url);


    this.setState({
      cityInfo: allData.data[0],
      showingMap: true
    })

  }

  render() {
    return (
      <div>
        <h1>City Explorer</h1>
        <form onSubmit={this.getLocation}>
          <input type='text' placeholder='city name' name='city' />
          <input type='submit' value='get City info' />
        </form>

        <p>City Name: {this.state.cityInfo.display_name},{this.state.cityInfo.lat},{this.state.cityInfo.lon}</p>

        {this.state.showingMap &&
          <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityInfo.lat},${this.state.cityInfo.lon}&zoom=15`} />
        }

      </div>
    )
  }
}

export default App;
