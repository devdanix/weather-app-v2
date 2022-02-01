import React, { useState } from 'react';

export default function Form({
  setResult = f => f
}) {

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

  const [ value, setValue ] = useState('')

  const getData = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=metric`)
    .then(result => {
      if(result.ok) {
        return result.json()
      } else {
        setResult('Error')
        return result = 'Error'
      }
    })
    .then(result => {
      if (result !== 'Error') setResult(result)
    })
    .catch(error => {console.error('Error:', error)})
  }

  return (
    <div >
      <form className='form dsfx ai-cr jc-sb'>
        <label>Your city: </label>
        <input
          type="text"
          className="form-input-field"
          placeholder=""
          onChange={(e) => setValue(e.target.value)}
          value={value}
          required={true}
        />
        <button className='search-button' onClick={(e) => {
          e.preventDefault()
          if(!value) return false
          getData(value)
        }}/>
      </form>
    </div>
  )
}
