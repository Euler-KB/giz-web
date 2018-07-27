import React from 'react';
import PropTypes from 'prop-types';

const Style = {
    padding: 12,
    backgroundColor: "#f6f6f6",
    color: "#cd201f",
    marginTop: 4,
    fontSize: "smaller"
};

const ErrorDisplay = (props) => {
    const hasError = props.error;
    return hasError ? <div style={Style}>{props.error}</div> : null;
};

ErrorDisplay.propTypes = {
    error: PropTypes.any
};

export default ErrorDisplay;