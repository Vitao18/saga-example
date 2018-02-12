import React from 'react';
import PropTypes from 'prop-types';

const App = ({ counter }) => <div>{counter}</div>;

App.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default App;
