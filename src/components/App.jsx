import React from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';

class App extends React.Component {
  //stats on start
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //increment function for buttons and stats
  feedback = whichButtonWasClicked => {
    switch (whichButtonWasClicked) {
      case 'good':
        this.setState(state => ({ good: state.good + 1 }));
        break;
      case 'neutral':
        this.setState(state => ({ neutral: state.neutral + 1 }));
        break;
      case 'bad':
        this.setState(state => ({ bad: state.bad + 1 }));
        break;
      default:
        return 0;
    }
  };

  //sum of all feedback
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  //percentage of good feedback
  countPositiveFeedbackPercentage = () => {
    let percentage = Math.floor(
      ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
    );
    if (isNaN(percentage)) {
      return 0;
    } else return percentage;
  };

  render() {
    //destructuring state
    const { good, neutral, bad } = this.state;

    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
          padding: '20px 10px',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.feedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
