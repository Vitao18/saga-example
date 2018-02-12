import React from 'react';
import PropTypes from 'prop-types';

const Add = ({ onAddClick }) => <button onClick={() => onAddClick()}>+ 1</button>;

Add.propTypes = {
  onAddClick: PropTypes.func.isRequired,
};

export default Add;
