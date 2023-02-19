import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchWeatherAction } from '../actions';
const initialState = {
    data: {
        city: {
            name: ''
        },
        list: []
    }
} as WeatherSliceType
const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchWeatherAction.fulfilled, (state: any, actionData: PayloadAction<weatherApiResponseType>) => {
                const payload: weatherApiResponseType = actionData.payload
                state.data = { list: payload.list, city: payload.city }
            }
        )
    }
})
export default weatherSlice.reducer