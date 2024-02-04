import PropTypes from 'prop-types';

export default function Statistics({
  goodReview,
  neutralReview,
  badReview,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <h3>Statistics</h3>
      <p>Good: {goodReview}</p>
      <p>Neutral: {neutralReview}</p>
      <p>Bad: {badReview}</p>
      <p>Total Opinions: {total}</p>
      <p>Positive Feedback Percentage: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
