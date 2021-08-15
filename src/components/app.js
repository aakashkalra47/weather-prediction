import React, { Component } from "react";
import SearchBar from "../containers/search_bar";
import WeatherList from "../containers/weather_list";
import Header from './Header';
import '../style/style.css';
export default class App extends Component {

  render() {
    return (
      <div className="container">
        <Header />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
