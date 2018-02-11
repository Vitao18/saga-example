import * as R from 'ramda';

const addToTwo = R.add(2);

console.log('A simple sum using some currying', addToTwo(10));
