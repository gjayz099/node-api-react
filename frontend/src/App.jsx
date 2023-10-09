import React from "react"
import {BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom'
import Navbar from './assets/components/navbar/Navbar'
import Home from './assets/components/Home'
import Shop from "./assets/components/Shop"
import Company from "./assets/components/Company"
import Contact from "./assets/components/Contact"
import Login from "./assets/components/Login"


function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/company' element={<Company/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/login' element={<Login/>} />


      </Routes>

    </Router>
    </>
  )
}

export default App
