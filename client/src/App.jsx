import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Logout from './pages/Logout'
import Services from './pages/Services'

export default function App() {
  return (
    <>
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/logout' element={<Logout/>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
    </>
  )
}
