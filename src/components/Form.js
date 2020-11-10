import React from 'react'

const Form = (props) => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="Oras..." />
    <input type="text" name="country" placeholder="Tara..." />
    <button>Afla vremea</button>
  </form>
)

export default Form
