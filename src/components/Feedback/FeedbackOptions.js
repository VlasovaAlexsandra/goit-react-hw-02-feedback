import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
        <button className="btn" type="button" onClick={() => onLeaveFeedback(`${options[0]}`)}> Good </button>
        <button className="btn" type="button" onClick={() => onLeaveFeedback(`${options[1]}`)}> Neutral </button>
        <button className="btn" type="button" onClick={() => onLeaveFeedback(`${options[2]}`)}> Bad </button>
    </div>
);

export default FeedbackOptions;