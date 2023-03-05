import React, { useState } from 'react'
import { useAppDispatch } from 'hooks'
import { fetchWeatherAction } from '../actions/index'

const SearchBar = () => {
  const [term, setTerm] = useState('')
  const dispatch = useAppDispatch()
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }
  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await dispatch(fetchWeatherAction(term))
  }
  return (
        <form onSubmit={onFormSubmit} className="input-group">
            <input
                placeholder="five day forecast"
                className="form-control"
                value={term}
                onChange ={onInputChange}
            />
            <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">
                    Submit
                </button>
            </span>
        </form>
  )
}

export default SearchBar
