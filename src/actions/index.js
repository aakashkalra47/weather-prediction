import axios from 'axios';
const API_KEY='a0321d582cdc7898e15d46dc802ef742';
const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER='FETCH_WEATHER'; 

export function fetchWeather(city){
    const url=`${ROOT_URL}&q=${city},in`;
    const request=axios.get(url);
    console.log('request',request);
    return {
        type:FETCH_WEATHER,
        payload:request
    };
}