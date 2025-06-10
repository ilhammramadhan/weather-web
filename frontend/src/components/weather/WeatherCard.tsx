import React from 'react'

interface WeatherCardProps {
  temperature: number
  time: string
  condition: string
  rainProbability: number
  location: {
    city: string
    country: string
    imageUrl: string
  }
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  temperature,
  time,
  condition,
  rainProbability,
  location
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col h-full">
      {/* Weather Illustration */}
      <div className="relative w-full aspect-square mb-8">
        <div className="absolute inset-0">
          {/* Sun */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-300 rounded-full" />
          {/* Rain Drops */}
          <div className="absolute top-1/2 left-1/3 space-y-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-8 bg-blue-500 rounded-full ml-4"
                style={{
                  transform: 'rotate(15deg)',
                  marginLeft: `${i * 12}px`,
                  opacity: 1 - i * 0.2
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Temperature and Time */}
      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center">
          <span className="text-8xl font-light">{temperature}</span>
          <span className="text-4xl font-light">°C</span>
        </div>
        <p className="mt-4 text-xl text-gray-600">
          <span className="font-medium">Monday</span>
          <span className="text-gray-400">, {time}</span>
        </p>
      </div>

      {/* Weather Info */}
      <div className="space-y-3 text-center">
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
          <span>{condition}</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-blue-500">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span>Rain - {rainProbability}%</span>
        </div>
      </div>

      {/* Location */}
      <div className="mt-auto pt-8">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={location.imageUrl}
            alt={location.city}
            className="w-full h-24 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-3 left-3 text-white">
            <p className="font-medium">{`${location.city}, ${location.country}`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard