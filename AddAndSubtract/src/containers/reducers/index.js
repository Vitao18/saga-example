import { ADD, SUB } from '../actions';

const initialState = { counter: 0 };

function operate(state = initialState, action) {
  switch (action.type) {
    case (ADD):
      return Object.assign({}, state, { counter: state.counter + 1 });
    case (SUB):
      return Object.assign({}, state, { counter: state.counter - 1 });
    default:
      return state;
  }
}

export default operate;
