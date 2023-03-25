import React, {createContext, useState, useEffect} from 'react';

const FeedBackContext = createContext();

export const FeedBackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);
    const [update, setUpdate] = useState({
        item: {},
        edit: false,
    });

    useEffect(() => {
      fetchFeedBack();
    }, []);

    const fetchFeedBack = async () => {
      const response = await fetch(`/feedback?_sort=id&_order=desc`);
      const data = await response.json();

      setFeedback(data);
      setIsLoading(false);
    }

    const deleteFeedback = async (id) => {
      try {
        await fetch(`/feedback/${id}`, {
          method: 'DELETE'
        })
        setFeedback(feedback.filter(x => x.id !== id))
      } catch (e){
        console.error(e);
      }
    }
    
    const addFeedBack = async (newFeedBack) => {
      try{
        await fetch(`/feedback`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newFeedBack)
        })
        .then((response) => response.json())
        .then((data) => {
          setFeedback([data, ...feedback]);
        })
        .catch((err) => {
          console.log('error: ', err);
        })
      } catch (e) {
        console.error(e);
      }
    } 

    const editFeedBack = (item) => {
        setUpdate({
            item,
            edit: true
        })
    }

    const updateFeedBack = async (id, updateItem) => {
      try {
        await fetch(`/feedback/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updateItem)
        })
        .then((res) => res.json())
        .then((data) => {
          setFeedback(feedback.map((item) => item.id === id ? data : item));
        })
        .catch((err) => {
          console.log('error: ', err);
        })
      } catch(e) {
        console.error(e);
      }
    }

    return <FeedBackContext.Provider value={{
            feedback,
            update,
            isLoading,
            deleteFeedback,
            addFeedBack,
            editFeedBack,
            updateFeedBack
            
        }}>
            {children}
        </FeedBackContext.Provider>
}

export default FeedBackContext;