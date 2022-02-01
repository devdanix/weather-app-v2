import React, { useState } from 'react';
import { v4 } from 'uuid';

import Forecast from './Forcast';

export default function ForecastList({
  data = [],
  setSelected = f => f
}) {

  const [ forcastToShow, setForecastToShow ] = useState([])

  if(!data) return false

  if(forcastToShow.length === 0) {
    let filteredData = data.list.filter(item => {
      return item.dt_txt.includes('12:00:00')
    })
    setForecastToShow(filteredData)
  }

  return (
      <ul className='gr-col-2 forecast-list'>
      {
        forcastToShow.map(item => {
          return (
            <Forecast key={v4()} item={item} setSelected={setSelected}/>
          )
        })
      }
      </ul>
  )
}
