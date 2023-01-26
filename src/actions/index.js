import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const API_KEY=process.env.REACT_APP_API_KEY
const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const fetchWeatherAction=createAsyncThunk('weather/fetchData',async (city)=>{
        const url=`${ROOT_URL}&q=${city},in`;
        const request= await axios.get(url);
        return request.data;
    }
)