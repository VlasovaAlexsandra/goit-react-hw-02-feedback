import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
        <button className="btn" type="button" onClick={() => onLeaveFeedback(`${options[0]}`)}> Good </button>
        <button className="btn" type="button" onClick={() => onLeaveFeedback(`${options[1]}`)}> Neutral </button>
        <button className="btn" type="button" onClick={() => onLeaveFeedback(`${options[2]}`)}> Bad </button>
    </div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;