import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
    <ul>
        <li className="stat">
            Good: {good}
        </li>
        <li className="stat">
            Neutral: {neutral}
        </li>
        <li className="stat">
            Bad: {bad}
        </li>
        <li className="stat">
            Total: {total}
        </li>
        <li className="stat">
            Positive Feedback: {positiveFeedback}%
        </li>
    </ul>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
}

export default Statistics;