import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Signup from './components/authenthication/Signup';
import Login from './components/authenthication/Login';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import About from './components/About';


function App() {
  

  return (
    <>
      <div className='App'>
         <Router>
            <Routes>
              <Route path='/' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/products' element={<Products/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/about' element={<About/>}/>
            </Routes>
         </Router>
      </div>
    </>
  )
}

export default App
