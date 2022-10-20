import PropTypes from 'prop-types';
import StatisticsCSS from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const Array = [
    [1, `Good: ${good}`],
    [2, `Neutral: ${neutral}`],
    [3, `Bad: ${bad}`],
    [4, `Total: ${total}`],
    [5, `Positive feedback: ${positivePercentage} % `],
  ];

  return (
    <ul className={StatisticsCSS.list}>
      {Array.map(([id, superString]) => (
        <li key={id} className={StatisticsCSS.item}>
          <span className={StatisticsCSS.paragraph}>{superString}</span>
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
