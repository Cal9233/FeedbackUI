import React, {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const FeedBackContext = createContext();

export const FeedBackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        }
    ]);
    const [update, setUpdate] = useState({
        item: {},
        edit: false,
    });

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter(x => x.id !== id))
    }
    
    const addFeedBack = (newFeedBack) => {
        newFeedBack.id = parseInt(uuidv4());
        setFeedback([newFeedBack, ...feedback]);
    }

    const editFeedBack = (item) => {
        setUpdate({
            item,
            edit: true
        })
    }

    const updateFeedBack = (id, updateItem) => {
        setFeedback([feedback.map(x => x.id === id ? {...x.id, ...updateItem} : x)]);
    }

    return <FeedBackContext.Provider value={{
            feedback,
            update,
            deleteFeedback,
            addFeedBack,
            editFeedBack,
            updateFeedBack
            
        }}>
            {children}
        </FeedBackContext.Provider>
}

export default FeedBackContext;