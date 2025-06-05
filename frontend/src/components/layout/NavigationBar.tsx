import React from 'react'

interface NavBarProps {
  onSearch: (term: string) => void
  onUnitToggle: () => void
}

const NavigationBar: React.FC<NavBarProps> = ({ onSearch, onUnitToggle }) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm rounded-lg mb-8">
      <div className="relative w-64">
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
      
      <div className="flex items-center gap-4">
        <button 
          className="px-4 py-2 rounded-full bg-blue-500 text-white"
          onClick={onUnitToggle}
        >
          °C
        </button>
        <button 
          className="px-4 py-2 rounded-full bg-gray-100"
          onClick={onUnitToggle}
        >
          °F
        </button>
      </div>
    </nav>
  )
}

export default NavigationBar