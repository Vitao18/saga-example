import * as actions from './actions';
import { CHANGE_INPUT } from '../src/actions';

const initialState = { input: '' };

const index = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
           return { ...state, input: action.input };
        default:
           return { ...state }; 
    }
}
