import React, {useContext} from 'react';
import FeedBackContext from '../context/FeedBackContext';

const FeedbackStats = () => {
  const {feedback} = useContext(FeedBackContext);
    let average = feedback.reduce((accumulator, current) => {
        return accumulator + current.rating
    }, 0) / feedback.length;

    average = average.toFixed(1).replace(/[.,]0$/,'');

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats