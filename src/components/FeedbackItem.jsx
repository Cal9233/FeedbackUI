import React, { useState } from 'react';
import Card from './share/Card';
import PropTypes from 'prop-types';
import {FaTimes} from 'react-icons/fa'

const FeedbackItem = (props) => {
    const {text, rating, handleDelete} = props;
    // const [rating, setRating] = useState(7);
    // const [text, setText] = useState('Example');

    // const handleClick = () => {
    //     //empty bracket arrow is actually a function in state
    //     //passing previous state onto argument
    //     setRating((prev) => {
    //         return prev + 1
    //     });
    // }


  return (
    <Card>
        <div className="num-display">{rating}</div>
        <button className='close' onClick={handleDelete}>
            <FaTimes color='purple'/>
        </button>
        <div className="text-display">{text}</div>
    </Card>
  )
}

FeedbackItem.propType = {
    prop: PropTypes.object.isRequired
}

export default FeedbackItem