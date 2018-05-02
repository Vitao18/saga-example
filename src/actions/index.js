export const SUBMIT = 'SUBMIT';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';

export const changeInput = search => ({ type: CHANGE_INPUT, search });
export const fetchWeather = (city) => ({ type: FETCH_WEATHER_REQUEST, city });