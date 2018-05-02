function* fetchWeather() {
    console.log('Here!');
}

export default function* rootSaga() {
    yield all([
        fetchWeather(),
    ])
};
