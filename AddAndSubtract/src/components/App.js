import React from 'react';
import Counter from './Counter';
import AddOne from '../containers/AddOne';
import SubOne from '../containers/SubOne';

const App = () => (
  <div>
    <Counter />
    <AddOne />
    <SubOne />
  </div>
);

export default App;
