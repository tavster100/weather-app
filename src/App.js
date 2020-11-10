import React from 'react'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = 'a945bbb7db556ab4f76656efd5a37cd4'
class App extends React.Component {
  state = {
    // state is an object
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    feels_like: undefined,
    wind_speed: undefined,
  }
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`,
    )
    const data = await api_call.json()
    // eslint-disable-next-line
    console.log(data)
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: '',
        feels_like: data.main.feels_like,
        wind_speed: data.wind.speed,
        icon: data.weather[0].icon,
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        feels_like: undefined,
        wind_speed: undefined,
        icon: undefined,
        error: 'Te rog , completeaza Orasul si Tara ',
      })
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles></Titles>
                </div>
                <div className="col-xs-7 form-container">
                  <div>
                    <Form getWeather={this.getWeather}></Form>
                    <Weather
                      temperature={this.state.temperature}
                      city={this.state.city}
                      country={this.state.country}
                      humidity={this.state.humidity}
                      description={this.state.description}
                      feels_like={this.state.feels_like}
                      wind_speed={this.state.wind_speed}
                      icon={this.state.icon}
                      error={this.state.error}
                    ></Weather>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App
