import { call, put, take, takeEvery, all } from 'redux-saga/effects';
import * as TYPES from '../actions';

const api = (url) => fetch(url).then(response => response.json());
function* fetchWeather(city) {
   const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${process.env.API_KEY}&q=London,us`;
   try {
       const weatherReport = yield call(api, URL);
       console.log('Weather', weatherReport);
       yield put({ type: TYPES.FETCH_WEATHER_SUCCESS, data: weatherReport.list });
   } catch(err) {
       console.error(err);
   }
}

export default function* rootSaga() {
    yield all([
        takeEvery(TYPES.FETCH_WEATHER_REQUEST, fetchWeather),
    ])
};
