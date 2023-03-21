import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import AboutLinkIcon from "./components/AboutLinkIcon";
import { FeedBackProvider } from "./context/FeedBackContext";


function App() {
  return (
    <FeedBackProvider>
    <Router>
    <Header/>
      <div className="container">
        <Routes>
          <Route exact path="/" element={
            <>
              <FeedbackForm/>
              <FeedbackStats/>
              <FeedbackList/>
            </>
          }>
            
          </Route>
          <Route path="/about" element={<About />}/>
        </Routes>
        
        <AboutLinkIcon />
      </div>
    </Router>
      
    </FeedBackProvider>
  );
}

export default App;
