import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './slider.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
/**
 * Primary UI component for user interaction
 */
export const Slider = ({ minValue, maxValue, labelText, ...props }) => {

    const [min, setMin] = useState(minValue);
    const [max, setMax] = useState(maxValue);
    const [value, setValue] = useState(0);

    return (
        <div>
            <InputRange
                maxValue={max}
                minValue={min}
                value={value}
                formatLabel={value => `${value} ${labelText || ''}`}
                onChange={value => setValue(value)} ></InputRange>
        </div>
    );
};

Slider.propTypes = {
    maxValue: PropTypes.number.isRequired,
    minValue: PropTypes.number.isRequired,
    labelText: PropTypes.string,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

Slider.defaultProps = {
    onClick: undefined,
};
