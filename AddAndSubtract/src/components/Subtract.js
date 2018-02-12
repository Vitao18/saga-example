import React from 'react';
import PropTypes from 'prop-types';

const Subtract = ({ onSubClick }) => <button onClick={() => onSubClick()}>- 1</button>;

Subtract.propTypes = {
  onSubClick: PropTypes.func.isRequired,
};

export default Subtract;
