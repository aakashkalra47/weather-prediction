import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchWeatherAction } from '../actions'
const initialState: WeatherSliceType = {
  data: {
    city: {
      name: ''
    },
    list: []
  }
}
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchWeatherAction.fulfilled, (state: WeatherSliceType, actionData: PayloadAction<weatherApiResponseType>) => {
        const payload: weatherApiResponseType = actionData.payload
        state.data = { list: payload.list, city: payload.city }
      }
    )
  }
})
export default weatherSlice.reducer
