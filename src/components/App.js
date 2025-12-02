
import React from "react";
import './../styles/App.css';
import About from './About'
import { Link, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
     <Link to={'/about'}>About</Link><br />
        <b>Welcome to my website!</b>
     <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
