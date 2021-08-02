import React from 'react';
import PropTypes from 'prop-types';
import './toggle.css';

/**
 * Primary UI component for user interaction
 */
export const Toggle = ({ backgroundColor, checked, ...props }) => {
  return (
    <label class="switch">
      
      <input type="checkbox" checked={checked ? true : false} />
      {!checked &&
      <span class="slider round" ></span>}
      {checked && <span class="slider round" style={backgroundColor && { backgroundColor }}></span>}
    </label>
  );
};

Toggle.propTypes = {
  backgroundColor: PropTypes.string,
  checked: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Toggle.defaultProps = {
  checked: false
};
