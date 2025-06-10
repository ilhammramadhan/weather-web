import React from 'react'

interface HighlightsSectionProps {
  uvIndex: number
  windStatus: {
    speed: number
    direction: string
  }
  sunTime: {
    sunrise: string
    sunset: string
    sunriseOffset: string
    sunsetOffset: string
  }
  humidity: {
    value: number
    status: string
  }
  visibility: {
    distance: number
    status: string
  }
  airQuality: {
    value: number
    status: string
  }
}

const HighlightsSection: React.FC<HighlightsSectionProps> = ({
  uvIndex,
  windStatus,
  sunTime,
  humidity,
  visibility,
  airQuality
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Today's Highlights</h2>
      <div className="grid grid-cols-3 gap-6">
        {/* UV Index */}
        <div className="bg-white rounded-3xl p-6">
          <h3 className="text-gray-500 mb-4">UV Index</h3>
          <div className="text-5xl font-light">{uvIndex}</div>
        </div>

        {/* Wind Status */}
        <div className="bg-white rounded-3xl p-6">
          <h3 className="text-gray-500 mb-4">Wind Status</h3>
          <div className="text-5xl font-light mb-2">{windStatus.speed}</div>
          <div className="text-gray-500">km/h</div>
          <div className="mt-2 text-sm text-gray-600">{windStatus.direction}</div>
        </div>

        {/* Sunrise & Sunset */}
        <div className="bg-white rounded-3xl p-6">
          <h3 className="text-gray-500 mb-4">Sunrise & Sunset</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-full">
                <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <div className="font-medium">{sunTime.sunrise}</div>
                <div className="text-sm text-gray-500">{sunTime.sunriseOffset}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-full">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <div>
                <div className="font-medium">{sunTime.sunset}</div>
                <div className="text-sm text-gray-500">{sunTime.sunsetOffset}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="bg-white rounded-3xl p-6">
          <h3 className="text-gray-500 mb-4">Humidity</h3>
          <div className="text-5xl font-light mb-2">{humidity.value}%</div>
          <div className="text-sm text-gray-600">{humidity.status}</div>
        </div>

        <div className="bg-white rounded-3xl p-6">
          <h3 className="text-gray-500 mb-4">Visibility</h3>
          <div className="text-5xl font-light mb-2">{visibility.distance}</div>
          <div className="text-gray-500">km</div>
          <div className="mt-2 text-sm text-gray-600">{visibility.status}</div>
        </div>

        <div className="bg-white rounded-3xl p-6">
          <h3 className="text-gray-500 mb-4">Air Quality</h3>
          <div className="text-5xl font-light mb-2">{airQuality.value}</div>
          <div className="text-sm text-gray-600">{airQuality.status}</div>
        </div>
      </div>
    </div>
  )
}

export default HighlightsSection