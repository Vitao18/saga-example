export const SUBMIT = 'SUBMIT';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const FETCH_WEATHER = 'FETCH_WEATHER';
const URL = `http://api.openweathermap.org/data/2.5/forecast=?appid=${process.env.API_KEY}`;

export const changeInput = search => ({ type: CHANGE_INPUT, search });
export const fetchWeather = () => ({ type: FETCH_WEATHER });