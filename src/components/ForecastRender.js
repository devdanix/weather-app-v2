import React, { useState, useEffect } from 'react'
import ForecastList from './ForecastList';
import { TempChart } from './TempChart';
import WeatherIcon from './WeatherIcon';



export default function ForcastRender({
  data = []
}) {

  const [ selected, setSelected ] = useState('')

  const getCurrentDate = () => {
    let date = new Date()
    date = date.toLocaleDateString().split("/")
    let year = date[2]
    let month = date[1]
    let day = date[0]
    return `${year}-${month}-${day}`
  }

  useEffect(() => {
    setSelected(getCurrentDate())
  }, [data]);

  if(!data) return false

  const getDayTempData = (day) => {

    let dayData = data.list.filter(item => {
      return item.dt_txt.includes(day)
    })

    let result = dayData.map(item => {
      return {
        time: item.dt_txt.split(' ')[1],
        temp: item.main.temp,
      }
    })

    return result
  }

  const today = () => {
    if (data.list.length > 0) {

      let today = data.list[0]
      let id = today.weather[0].id
      let main = today.weather[0].main
      let humidity = today.main.humidity
      let temp = Math.ceil(today.main.temp)
      let wind = today.wind.speed
      let city = data.city.name
      let todayFormatted = new Date().toLocaleTimeString(
        'en-GB',
        {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          weekday: 'short',
          hour: '2-digit',
          minute: '2-digit'
        }
      )



      return (
        <div className='today-wrapper gr-col-1 item-wrapper'>
          <p className='mt w-100 ta-cr weather'>{city} Weather</p>
          <p className='w-100 ta-cr mt weather-date'>{todayFormatted}</p>
          <div className='dsfx jc-cr ai-cr mt-x3 mb-x2'>
            <WeatherIcon id={id} size='10em'/>
            <p className='temp'>{temp}<span className='celsius'>°C</span></p>
          </div>
          <p className='w-100 ta-cr weather weather-main mb-x3'>{main}</p>
          <div className='dsfx w-100 jc-sa mt-x2'>
            <p className='dsfx dsfx-col ai-cr '>Humidity<span className='mt'>{humidity}%</span></p>
            <p className='dsfx dsfx-col ai-cr'>Wind speed<span className='mt'>{wind}</span></p>
          </div>
        </div>
      )
    }
  }

  return (
    <div className='forecast-wrapper'>
      {today()}
      <div className='gr-col-2 item-wrapper'>
        <div className='chart-wrapper'>
          <TempChart tempData={getDayTempData(selected)}/>
        </div>
        <ForecastList data={data} setSelected={setSelected}/>
      </div>
  </div>
  )
}
