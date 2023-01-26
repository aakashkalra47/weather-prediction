import React,{ useState} from 'react';
import {useDispatch} from 'react-redux';
import { fetchWeatherAction } from '../actions/index';

const SearchBar =()=> {
    const [term,setTerm]=useState('')
    const dispatch=useDispatch()
    const onInputChange=( event)=>{
      setTerm(event.target.value );
    }
    const onFormSubmit=(event)=>{
        event.preventDefault();
        dispatch(fetchWeatherAction(term));
        setTerm('');
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

export default SearchBar;