import React from 'react'
import MainLayout from './components/layout/MainLayout'
import NavigationBar from './components/layout/NavigationBar'

const App = () => {
  const handleSearch = (term: string) => {
    console.log('Searching for:', term)
  }

  const handleUnitToggle = () => {
    console.log('Toggling temperature unit')
  }

  return (
    <MainLayout>
      <NavigationBar 
        onSearch={handleSearch}
        onUnitToggle={handleUnitToggle}
      />
      {/* More components will be added here */}
    </MainLayout>
  )
}

export default App