import React, {useState, useContext, useEffect} from 'react';
import Card from './share/Card';
import Button from './share/Button';
import RatingSelect from './RatingSelect';
import FeedBackContext from '../context/FeedBackContext';

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const {addFeedBack, updateFeedBack, update} = useContext(FeedBackContext);

    useEffect(() => {
        if(update.edit === true){
            setBtnDisabled(false);
            setText(update.item.text);
            setRating(update.item.rating);
        }
    }, [update])

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true);
            setMessage(null);
        } else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true);
            setMessage('Text must be at least 10 characters or greater');
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedBack = {
                text,
                rating
            }

            if(update.edit === true){
                updateFeedBack(update.item.id, newFeedBack)
            } else {
                addFeedBack(newFeedBack)
            }
            setText('');
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input value={text} onChange={handleTextChange} type="text" placeholder='Write a review'/>
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm