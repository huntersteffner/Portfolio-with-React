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
  // let Component
  // switch (window.location.pathname) {
  //   case '/':
  //     Component = Home
  //     break
  //   case '/about-me':
  //     Component = AboutMe
  //     break
  //   case '/work':
  //     Component = Work
  //     break
  //   case '/resume':
  //     Component = Resume
  //     break
  //   case '/contact':
  //     Component = Contact
  //     break
  // }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-me' element={<AboutMe/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  )
}
