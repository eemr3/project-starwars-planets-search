import React from 'react';
import PropTypes from 'prop-types';

function Button({ children }) {
  return (
    <button type="button">{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
