import React from 'react';
import PropTypes from 'prop-types';

function Select({ children }) {
  return (
    <select>
      {children}
    </select>);
}

Select.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Select;
