import React from 'react';
import Card from '../components/share/Card';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>This is a React App to leave feedback
                for a product service.
            </p>
            <p>Version: 1.0.0</p>
            <p>
                <Link to='/'>Back to Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default About