import React from 'react';

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

export default Statistics;