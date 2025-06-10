import React from 'react'

interface WeatherIconProps {
  type: string
  className?: string
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ type, className = "w-16 h-16" }) => {
  return (
    <img 
      src={`/assets/weather-icons/${type}.svg`} 
      alt={type}
      className={className}
    />
  )
}

export default WeatherIcon