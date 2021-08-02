import React from 'react';
import PropTypes from 'prop-types';
import './button.css';


/**
 * Primary UI component for user interaction
 */
export const Button = ({ buttonType, backgroundColor, size, label, disable, hover, className, ...props }) => {
  const mode = `storybook-button--${buttonType}`;
  const disableMode = disable ? `storybook-button--disable` : '';
  const hoverMode = hover ? `storybook-button--hover` : '';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, disableMode, hoverMode, className].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * What are the variant in buttons
   */
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'upgrade', 'warning', 'add-logo']),
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  disable: PropTypes.bool,
  hover: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  size: 'medium',
  buttonType: 'primary',
  disable: false,
  onClick: undefined,
};
