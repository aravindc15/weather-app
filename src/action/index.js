import axios from 'axios';
const API_KEY='a01320e03fc9e746806aa3d0de843d69';
const URL=`https://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`
export const FETCH_WEATHER='FETCH_WEATHER'


export default function fetchWeather(city){
    const url=`${URL}&q=${city},us`
    const request=axios.get(url);
    return {
        type:FETCH_WEATHER,
        payload:request
    }

}