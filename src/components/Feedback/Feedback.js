import React from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import './Feedback.css';

class Feedback extends React.Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleClick = evt => {
        const name = evt;
        this.setState(prevState => {
            return {
                [name]: prevState[name] + 1,
            };
        });
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const totalFeedback = this.countTotalFeedback();
        return Math.round((good * 100) / totalFeedback) || 0;
    }

    render() {

        const keyName = Object.keys(this.state);

        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={keyName}
                        onLeaveFeedback={this.handleClick}
                    />
                </Section>

                <Section title="Statistics">
                    {this.countTotalFeedback() === 0 ? (<Notification message="No feedback given" />
                    ) : (<Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotalFeedback()}
                        positiveFeedback={this.countPositiveFeedbackPercentage()}

                    />
                    )

                    }

                </Section>

            </div>
        );
    }
};

export default Feedback;