import React from 'react';
import './Feedback.css';

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    update = {
        total: 0,
        positive_feedback: 0
    };

    newState = { ...this.state, ...this.update };

    handleGood = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
            }
        })
    };

    handleNeutral = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
            }
        })
    };

    handleBad = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
            }
        })
    };




    countTotalFeedback = () => {
        this.setState((newstate) => {
            return {
                total: newstate.good + newstate.neutral + newstate.bad,
            }
        })
    };

    countPositiveFeedbackPercentage = () => {
        this.setState(() => {
            return {
                positive_feedback: Math.round((this.state.good / this.countTotalFeedback()) * 100),
            }
        })
    };

    render() {
        return (
            <div className="Feedback">
                <h2>Please leave feedback</h2>
                <div>
                    <button type="button" onClick={this.handleGood}> Good </button>
                    <button type="button" onClick={this.handleNeutral}> Neutral </button>
                    <button type="button" onClick={this.handleBad}> Bad </button>
                </div>

                <h2>Statistics</h2>
                <ul>
                    <li>
                        Good: {this.state.good}
                    </li>
                    <li>
                        Neutral: {this.state.neutral}
                    </li>
                    <li>
                        Bad: {this.state.bad}
                    </li>
                    <li>
                        Total: {this.update.total}
                    </li>
                    <li>
                        Positive Feedback: {this.update.positive_feedback}
                    </li>
                </ul>
            </div>
        );
    }
};

export default Feedback;