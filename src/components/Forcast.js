import React from 'react';
import { v4 } from 'uuid';
import WeatherIcon from './WeatherIcon';

export default function Forcast({
  item = '',
  setSelected = f => f
}) {

  const getDate = () => {
    let textDateArray = item.dt_txt.split(' ')
    let date = textDateArray[0]
    return date
  }

  const convertDate = (date) => {
    let dateSplit = date.split('-')
    let year = dateSplit[0]
    let month = dateSplit[1]
    let day = dateSplit[2]
    let result = new Date(`${month}/${day}/${year}`)
    return result.toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'})
  }

  const getTodayDayNumber = () => {
    let dateSplit = new Date().toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}).split(' ')
    let day = dateSplit[0]
    return day
  }

  let month = convertDate(getDate()).split(' ')[1]
  let day = convertDate(getDate()).split(' ')[0]
  let main = item.weather[0].main
  let humidity = item.main.humidity
  let temp = Math.ceil(item.main.temp)
  let id = item.weather[0].id

  const dateDiplay = () => {
    if(getTodayDayNumber() === day) {
      return <p className='mt'>Today</p>
    } else {
      return <p className='mt'>{month} {day}</p>
    }
  }

  return (
    <li key={v4()} className='day-wrapper'>
      <button className='day-button' onClick={() => setSelected(getDate())}>
        {dateDiplay()}
        <div className='dsfx jc-cr ai-cr'>
          <WeatherIcon id={id} size='4em'/>
          <p className='temp day-button-temp'>{temp}<span className='celsius'>°C</span></p>
        </div>
        <p className='w-100 ta-cr weather mb'>{main}</p>
        <div className='dsfx w-100 jc-sa mb humidity'>
          <p className='dsfx dsfx-col ai-cr'>Humidity<span>{humidity}%</span></p>
        </div>
      </button>
  </li>
  )
}
