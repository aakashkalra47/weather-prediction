import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import LineChart from '../components/charjs-chart';
import moment from 'moment';
class WeatherList extends Component {
  renderWeather(cityData) {

    const temps = cityData.list.map(weather => weather.main.temp-273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const labels=cityData.list.filter((e,i)=>(i%2==0)).map(weather=>moment(weather.dt_txt).format('ddd hh A'));

    return (
      <div style={{backgroundColor:"white"}}>
        <h1 className="h1" style={{textAlign:"center"}}>{cityData.city.name}</h1>
        <div style={{margin:20}} className="lead"><h3>Temperature</h3></div>
        <div><LineChart title="Temperature(C)" label={labels} data={temps}/></div>
        <div style={{margin:20} } className="lead"><h3>Pressure</h3></div>
        <div><LineChart title="Pressure(hPa)" label={labels} data={pressures}/></div>
        <div style={{margin:20}} className="lead"><h3>Humidity</h3></div>
        <div><LineChart title="Humidity" label={labels} data={humidities}/></div>
      </div>
    );
  }
  homePage(){
    return (
      <div>
        <h2>Please Enter the city in Search Bar</h2>
      </div>
    );
  }
  render() {
    return (
      <div className="container" >
        {this.props.weather.length?this.props.weather.map(this.renderWeather):this.homePage()}
      </div>
    );
  }
}
function mapStateToProps({weather}){
    return {weather}
}
export default connect(mapStateToProps)(WeatherList);