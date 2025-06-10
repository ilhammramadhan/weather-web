import React from 'react'
import Sidebar from './components/layout/Sidebar'
import WeeklyForecast from './components/weather/WeeklyForecast'
import HighlightsSection from './components/weather/HighlightsSection'

const App = () => {
  const handleSearch = (term: string) => {
    console.log('Searching for:', term)
  }

  const mockForecasts = [
    { day: 'Sun', temp: 15, minTemp: 3, icon: 'sunny' },
    { day: 'Mon', temp: 12, minTemp: 7, icon: '/icons/partly-cloudy.svg' },
    { day: 'Tue', temp: 9, minTemp: 2, icon: '/icons/cloudy.svg' },
    { day: 'Wed', temp: 8, minTemp: -1, icon: '/icons/rainy.svg' },
    { day: 'Thu', temp: 5, minTemp: -2, icon: '/icons/snowy.svg' },
    { day: 'Fri', temp: 4, minTemp: -4, icon: '/icons/sunny.svg' },
    { day: 'Sat', temp: 3, minTemp: -3, icon: '/icons/sunny.svg' },
  ]

  return (
    <div className="flex">
      <Sidebar
        onSearch={handleSearch}
        temperature={12}
        time="16:00"
        condition="Mostly Cloudy"
        rainProbability={30}
        location={{
          city: "New York",
          country: "USA",
          imageUrl: "https://images.unsplash.com/photo-1499092346589-b9b6be9901f7"
        }}
      />
      <main className="ml-96 flex-1 min-h-screen bg-gray-50 p-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <WeeklyForecast forecasts={mockForecasts} />
          <HighlightsSection
            uvIndex={5}
            windStatus={{ speed: 7.70, direction: 'WSW' }}
            sunTime={{
              sunrise: '6:35 AM',
              sunset: '5:42 PM',
              sunriseOffset: '- 1m 46s',
              sunsetOffset: '+ 2m 22s'
            }}
            humidity={{ value: 12, status: 'Normal' }}
            visibility={{ distance: 5.2, status: 'Average' }}
            airQuality={{ value: 105, status: 'Unhealthy' }}
          />
        </div>
      </main>
    </div>
  )
}

export default App