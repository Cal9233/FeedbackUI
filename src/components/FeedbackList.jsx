import React, {useContext} from 'react';
import FeedbackItem from './FeedbackItem';
import {motion, AnimatePresence} from 'framer-motion';
import FeedBackContext from '../context/FeedBackContext';

const FeedbackList = () => {
  const {feedback, handleDelete} = useContext(FeedBackContext);
  return (
    <div className='feedback-list'>
      <AnimatePresence>
      {feedback && feedback.length > 0 ?
        (
          feedback.map((item) => 
            <motion.div
              key={item.id}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              >
                <FeedbackItem 
                key={item.id}
                item={item}
              />
            </motion.div>
            
          )
        ) : 
        (
          <p>No Feedback yet</p>
          )
        }
      </AnimatePresence>
    </div>
  )


  //component without animation
  // return (
  //   <div className='feedback-list'>{feedback && feedback.length > 0 ?
  //       (
  //         feedback.map((item) => 
  //           <FeedbackItem 
  //               key={item.id} 
  //               text={item.text} 
  //               rating={item.rating} 
  //               handleDelete={() => handleDelete(item.id)}
  //           />
  //         )
  //       ) : 
  //       (
  //         <p>No Feedback yet</p>
  //         )
  //       }</div>
  // )
}

export default FeedbackList