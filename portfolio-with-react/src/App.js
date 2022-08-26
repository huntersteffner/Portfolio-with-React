import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Work from './components/Work'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom'
import './App.css'

export default function App() {

  return (
    <div className='content-container'>
      <Navbar />
      {/* react-router-dom routes */}
      <Routes>
        <Route path='/Portfolio-with-React/' element={<Home/>} />
        <Route path='/Portfolio-with-React/about-me' element={<AboutMe/>} />
        <Route path='/Portfolio-with-React/work' element={<Work/>} />
        <Route path='/Portfolio-with-React/resume' element={<Resume/>} />
        <Route path='/Portfolio-with-React/contact' element={<Contact/>} />
      </Routes>
      
      <Footer />
    </div>
  )
}
