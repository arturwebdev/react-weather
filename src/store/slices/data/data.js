import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fatchData = createAsyncThunk(
    'data/fatchData',
    async function(location) {
        const key = '982100ddb74641629c440048222507'
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=14`)


        const initialData = await response.data
        console.log(initialData);
        const data = {
            name: initialData.location.name,
            temp: initialData.current.temp_c,
            feelslike: initialData.current.feelslike_c,
            wind_mph: initialData.current.wind_mph,
            pressure_mb: initialData.current.pressure_mb,
            humidity: initialData.current.humidity,
            icon: initialData.current.condition.icon.slice(34),
            location: initialData.location.country,
            forecast: initialData.forecast.forecastday.map(el => ({
                date: el.date,
                icon: el.day.condition.icon.slice(34),
                maxTemp: el.day.maxtemp_c,
                minTemp: el.day.mintemp_c
            }))
        }
        console.log(data);
        return data
    }
)

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        loading: false,
        errors: false,
        countres: [],
        corentCountry: {} 
    },
    reducers: {
        changeCorentCountry(state, {payload}) {
            console.log(payload);
            return {
                ...state,
                corentCountry: state.countres.filter(el => el.name === payload)[0]
            }
        },
        deleteCountry(state, {payload}){
            if (state.countres.length > 1) {
                return  {
                    ...state,
                    corentCountry: state.countres[0],
                    countres: state.countres.filter(el => el.name !== payload)
                }
            }

            return state

        }
    },
    extraReducers: {
        [fatchData.fulfilled]: (state, {payload}) => {
            console.log(state.countres.findIndex(el => el.name === payload.name))
            if (state.countres.findIndex(el => el.name === payload.name) === -1) {
                return {
                    ...state,
                    loading: false,
                    errors: false,
                    countres: [...state.countres, payload],
                    corentCountry: payload
                }    
            }
            return {
                ...state,
                loading: false,
                errors: false,
                countres: state.countres,
                corentCountry: payload
            }
        }
    }
})

export const { changeCorentCountry, deleteCountry } = dataSlice.actions

export const selectData = (state) => state.data

export const dataReducer = dataSlice.reducer