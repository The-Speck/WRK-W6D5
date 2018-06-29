import React from 'react';
import fetchWeather from './util';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Loading',
      temp: ''
    };

  }

  getWeather(data){
    const lat = data.coords.latitude;
    const lon = data.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c1e452b6676255adf9e0bd477e07b8fb`;
    const options = { method: 'GET', url: url};
    fetchWeather(options).then(this.parseWeather.bind(this));
  }

  parseWeather(data){
    const location = data.name;
    const temp = Math.floor((data.main.temp) - 273.15);
    this.setState({ location, temp});
    // console.log(data.location);
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.getWeather.bind(this));
  }

  render() {
    return (
      <div>
        {this.state.location} {this.state.temp}
      </div>
    );
  }
}

export default Weather;
