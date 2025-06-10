import React from 'react'

interface SidebarProps {
  onSearch: (term: string) => void
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

const Sidebar: React.FC<SidebarProps> = ({
  onSearch,
  temperature,
  time,
  condition,
  rainProbability,
  location
}) => {
  return (
    <div className="fixed left-0 top-0 h-screen w-96 bg-white shadow-lg">
      {/* Search Section */}
      <div className="p-6 border-b">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for places..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200"
            onChange={(e) => onSearch(e.target.value)}
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Weather Display */}
      <div className="p-6">
        {/* Weather Illustration */}
        <div className="relative w-full aspect-square mb-8">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-300 rounded-full" />
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

        {/* Temperature Display */}
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
        <div className="space-y-3 text-center mb-8">
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
        <div className="rounded-2xl overflow-hidden">
          <img
            src={location.imageUrl}
            alt={location.city}
            className="w-full h-24 object-cover"
          />
          <div className="relative -mt-12 px-3 pb-3 pt-8 bg-gradient-to-t from-black/50 to-transparent">
            <p className="text-white font-medium">{`${location.city}, ${location.country}`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar