import React from 'react';
import PropTypes from 'prop-types';

const Subtract = ({ onButtonClick }) => <button onClick={() => onButtonClick('sub')}>- 1</button>;

Subtract.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Subtract;
