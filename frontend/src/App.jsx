import React from "react"
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Navbar from './assets/components/navbar/Navbar'
import Home from './assets/components/Home'
import Shop from "./assets/components/Shop"
import Company from "./assets/components/Company"
import Contact from "./assets/components/Contact"
import Login from "./assets/components/Login"
import ProtectedRoute from "../src/assets/components/protectedRoute/ProtectedRoute"


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
          {/* <ProtectedRoute
            path="/admin"
            component={AdminDashboard}
            userRoles={['admin']}
          />
     
          <ProtectedRoute
            path="/user"
            component={UserDashboard}
            userRoles={['user']}
          /> */}
      </Routes>

    </Router>
    </>
  )
}

export default App
