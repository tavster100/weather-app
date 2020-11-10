import React from 'react'

const Weather = (props) => (
  <div className="weather__info">
    {props.city && props.country && (
      <p className="weather__key">
        Locatie:{' '}
        <span className="weather__value">
          {' '}
          {props.city},{props.country}
        </span>
      </p>
    )}

    {props.temperature && (
      <p className="weather__key">
        Temperatura:{' '}
        <span className="weather__value"> {props.temperature}</span>°C
      </p>
    )}

    {props.humidity && (
      <p className="weather__key">
        Umiditate: <span className="weather__value"> {props.humidity}</span>
      </p>
    )}

    {props.description && (
      <p className="weather__key">
        Conditie meteo:
        <span className="weather__value"> {props.description}</span>{' '}
      </p>
    )}
    {props.feels_like && (
      <p className="weather__key">
        Temperatura resimtita :
        <span className="weather__value"> {props.feels_like}</span>
        °C
      </p>
    )}
    {props.wind_speed && (
      <p className="weather__key">
        Viteza vantului :
        <span className="weather__value"> {props.wind_speed} </span>
        Km/h
      </p>
    )}
    {props.icon && (
      <p className="weather__key">
        Icon :
        <img
          className="weather__value"
          src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt="icon"
        ></img>
      </p>
    )}

    {props.error && <p className="weather__error">Eroare : {props.error}</p>}
  </div>
)

export default Weather
