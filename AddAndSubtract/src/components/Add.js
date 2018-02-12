import React from 'react';
import PropTypes from 'prop-types';

const Add = ({ onButtonClick }) => <button onClick={() => onButtonClick('add')}>+ 1</button>;

Add.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Add;
