import { useState } from 'react'
import logo from './logo.svg'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Rating, Thanks, RatingStart} from './screens';
import { Rating_context } from './helpers/rating_context';

function App() {

  const [ratingScore, setRatingScore] = useState(0);

  return (
    <Router>
      <Rating_context.Provider value={{ratingScore,setRatingScore}}>
        <Routes>
          <Route path="/" element={<RatingStart/>}/>
          <Route path="/:num" element={<Rating/>}/>
          <Route path='/thanks/:num' element={<Thanks/>}/>
        </Routes>
      </Rating_context.Provider>
      
    </Router>
  )
}

export default App
