import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ counter }) => <div>{counter}</div>;

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default Counter;
