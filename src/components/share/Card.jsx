import React from 'react';
import PropTypes from 'prop-types';

const Card = ({children, reverse}) => {
    //children prop just allows this component to inherit everything from the parent component
    //this is a style component
    //Conditional Class => className={`card ${reverse && 'reverse'}`}
    //if condition in className is essentially, the "prop" is the condition and '&&' is the "then"
    //so if reverse is true than add 'reverse' to the className
    //Conditional Style => style={{backgroundColor: reverse ? 'rgba(0, 0, 0, 0.4)' : '#fff',color: reverse ? '#fff' : '#000'
    //adding terniary condition to style
    
  return (
    <div className='card' style={{
        backgroundColor: reverse ? 'rgba(0, 0, 0, 0.4)' : '#fff',
        color: reverse ? '#fff' : '#000',
        }}
    >{children}</div>
  )
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card