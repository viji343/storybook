import React from 'react';
import PropTypes from 'prop-types';
import './tooltip.css';

/**
 * Primary UI component for user interaction
 */
export const Tooltip = ({ backgroundColor, toolText, label, position, ...props }) => {
    return (
        <div className={['tooltips', `${position}-align`].join(' ')}>{label}
            <span
                className={['tooltiptext', `${position}-position`].join(' ')}
                style={backgroundColor && { backgroundColor }}
            >{toolText}</span>
        </div>
    );
};

Tooltip.propTypes = {
    backgroundColor: PropTypes.string,
    toolText: PropTypes.string,
    label: PropTypes.string,
    position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),

    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

Tooltip.defaultProps = {
    toolText: 'Hover over me',
    label: 'Tooltip text',
    position: 'top'
};
