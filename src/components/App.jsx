import React, { useState } from 'react';
import SectionTitle from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

export function App() {
  const [goodReview, setGoodReview] = useState(0);
  const [neutralReview, setNeutralReview] = useState(0);
  const [badReview, setBadReview] = useState(0);

  const countTotalFeedback = () => {
    return goodReview + neutralReview + badReview;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positivePercentage =
      total === 0 ? 0 : Math.round((goodReview / total) * 100);

    return positivePercentage;
  };

  const onLeaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGoodReview(prevGoodReview => prevGoodReview + 1);
        break;
      case 'neutral':
        setNeutralReview(prevNeutralReview => prevNeutralReview + 1);
        break;
      case 'bad':
        setBadReview(prevBadReview => prevBadReview + 1);
        break;
    }
  };
  return (
    <div>
      <SectionTitle title="Please leave feedback" />
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
      />

      {countTotalFeedback() > 0 ? (
        <Statistics
          good={goodReview}
          neutral={neutralReview}
          bad={badReview}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
}
