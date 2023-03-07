import React from 'react';
import PropTypes from 'prop-types'

const Header = ({text}) => {
  return (
    <header>
        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>
  )
}

//defaulted props incase no props is passed in
Header.defaultProps = {
    text: 'Feedback UI'
}

//checks typing for props
Header.propTypes = {
    text: PropTypes.string
}

export default Header