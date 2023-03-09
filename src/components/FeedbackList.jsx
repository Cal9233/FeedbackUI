import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

const FeedbackList = ({feedback, handleDelete}) => {
  return (
    <div className='feedback-list'>{feedback && feedback.length > 0 ?
        (
          feedback.map((item) => 
            <FeedbackItem 
                key={item.id} 
                text={item.text} 
                rating={item.rating} 
                handleDelete={() => handleDelete(item.id)}
            />
          )
        ) : 
        (
          <p>No Feedback yet</p>
          )
        }</div>
  )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList