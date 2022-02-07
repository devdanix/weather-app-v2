import React from 'react';

import {
  WiDaySunny,
  WiThunderstorm,
  WiSprinkle,
  WiRain,
  WiSnow,
  WiFog,
  WiCloudy,
} from 'react-icons/wi'

export default function WeatherIcon({
  id = '',
  size = ''
}) {

  if (id === '') return false

  if (id > 299 && id < 233) {
    return <WiThunderstorm size={size}/>
  } else if (id > 299 && id < 322) {
    return <WiSprinkle size={size} />
  } else if (id > 499 && id < 533) {
    return <WiRain size={size} />
  } else if (id > 599 && id < 623) {
    return <WiSnow size={size} />
  } else if (id > 700 && id < 782) {
    return <WiFog size={size} />
  } else if (id === 800 ) {
    return <WiDaySunny size={size}/>
  } else if (id > 800) {
    return <WiCloudy size={size}/>
  }

}
