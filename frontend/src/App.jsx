import React from "react"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './assets/components/navbar/Navbar'
import Home from './assets/components/Home'


function App() {

  

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
