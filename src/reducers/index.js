import * as actions from '../actions';

const initialState = { input: '' };

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.CHANGE_INPUT:
           return { ...state, input: action.search };
        default:
           return { ...state }; 
    }
}
