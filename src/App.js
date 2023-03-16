import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {v4 as uuidv4} from 'uuid';
import About from "./pages/About";
import AboutLinkIcon from "./components/AboutLinkIcon";


function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter(x => x.id !== id))
  }

  const addFeedBack = (newFeedBack) => {
    newFeedBack.id = parseInt(uuidv4());
    setFeedback([newFeedBack, ...feedback]);
  }

  return (
    <>
    <Router>
    <Header/>
      <div className="container">
        <Routes>
          <Route exact path="/" element={
            <>
              <FeedbackForm handleAdd={addFeedBack}/>
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </>
          }>
            
          </Route>
          <Route path="/about" element={<About />}/>
        </Routes>
        
        <AboutLinkIcon />
      </div>
    </Router>
      
    </>
  );
}

export default App;
