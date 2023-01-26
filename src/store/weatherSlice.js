import { createSlice } from '@reduxjs/toolkit';
import { fetchWeatherAction } from '../actions';
const weatherReducer=createSlice({
    name:'weather',
    initialState:{
        data:
        {
            city:null,
            list:[]
        }
    },
    extraReducers:{
        [fetchWeatherAction.fulfilled]:(state,{payload})=>{
            state.data={list:payload.list,city:payload.city}
        }
    }
})
export default weatherReducer.reducer