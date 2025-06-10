import React from 'react'
import WeatherIcon from '../icons/WeatherIcon'

interface DayForecast {
  day: string
  temp: number
  minTemp: number
  icon: string
}

interface WeeklyForecastProps {
  forecasts: DayForecast[]
}

const WeeklyForecast: React.FC<WeeklyForecastProps> = ({ forecasts }) => {
  return (
    <div className="grid grid-cols-7 gap-4">
      {forecasts.map((forecast) => (
        <div key={forecast.day} className="bg-white rounded-3xl p-4 text-center">
          <p className="text-gray-600 mb-2">{forecast.day}</p>
          <div className="flex justify-center mb-2">
            <WeatherIcon type={forecast.icon} />
          </div>
          <p className="font-semibold">
            {forecast.temp}° 
            <span className="text-gray-400 text-sm ml-1">
              {forecast.minTemp}°
            </span>
          </p>
        </div>
      ))}
    </div>
  )
}

export default WeeklyForecast