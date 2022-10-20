import PropTypes from 'prop-types';
import FeedbackCSS from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={FeedbackCSS.list}>
      {options.map(option => (
        <li key={option} className={FeedbackCSS.item}>
          <button onClick={() => onLeaveFeedback(option)}>{option}</button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
