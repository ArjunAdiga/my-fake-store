import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Signup from './components/authenthication/Signup';
import Login from './components/authenthication/Login';


function App() {
  

  return (
    <>
      <div className='App'>
         <Router>
            <Routes>
              <Route path='/' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/home' element={<Home/>}/>
            </Routes>
         </Router>
      </div>
    </>
  )
}

export default App
