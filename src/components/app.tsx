import React from 'react'
import SearchBar from '../containers/SearchBar'
import WeatherList from '../containers/WeatherList'
import Header from './Header'
export const App = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <WeatherList />
    </div>
  )
}
