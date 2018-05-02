import * as actions from '../actions';

const initialState = { input: '', weatherReport: [] };

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.CHANGE_INPUT:
           return { ...state, input: action.search };
        case actions.FETCH_WEATHER_SUCCESS:
           return { ...state }
        default:
           return { ...state }; 
    }
}
