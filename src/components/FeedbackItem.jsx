import React, { useState, useContext } from 'react';
import Card from './share/Card';
import PropTypes from 'prop-types';
import {FaTimes, FaEdit} from 'react-icons/fa'
import FeedBackContext from '../context/FeedBackContext';

const FeedbackItem = ({item}) => {
  const {deleteFeedback, editFeedBack} = useContext(FeedBackContext);


  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className='close' onClick={() => deleteFeedback(item.id)}>
            <FaTimes color='purple'/>
        </button>
        <button className="edit" onClick={() => editFeedBack(item)}>
          <FaEdit color="purple"/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propType = {
    prop: PropTypes.object.isRequired
}

export default FeedbackItem