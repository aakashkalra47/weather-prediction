import React from 'react'
import { useAppSelector } from 'hooks'
import LineChart from '../components/LineChart'
import moment from 'moment'
const WeatherList = () => {
  const weatherData = useAppSelector((state) => (state.weather.data))
  const renderWeather = (cityData: { city: { name: string }, list: weatherListItem[] }) => {
    const temps = cityData.list.map((weather: weatherListItem) => weather.main.temp - 273)
    const pressures = cityData.list.map((weather: weatherListItem) => weather.main.pressure)
    const humidities = cityData.list.map((weather: weatherListItem) => weather.main.humidity)
    const labels = cityData.list.map((weather: weatherListItem) => moment(weather.dt_txt).format('ddd hh A'))
    return (
      <div style={{ backgroundColor: 'white' }}>
        <h1 className="h1" style={{ textAlign: 'center' }}>{cityData.city.name}</h1>
        <div style={{ margin: 20 }} className="lead"><h3>Temperature</h3></div>
        <div><LineChart title="Temperature(C)" label={labels} data={temps}/></div>
        <div style={{ margin: 20 }} className="lead"><h3>Humidity</h3></div>
        <div><LineChart title="Humidity" label={labels} data={humidities}/></div>
        <div style={{ margin: 20 } } className="lead"><h3>Pressure</h3></div>
        <div><LineChart title="Pressure(hPa)" label={labels} data={pressures}/></div>
      </div>
    )
  }
  const homePage = () => {
    return (
      <div>
        <h2>Please Enter the city in Search Bar</h2>
      </div>
    )
  }
  return (
    <div className="container" >
      {(weatherData.list.length > 0) ? renderWeather(weatherData) : homePage()}
    </div>
  )
}
export default WeatherList
