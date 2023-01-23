import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom'
import './App.css'

export default function App() {
  const projects = [
    // {
    //   title: 'Wookies Gold',
    //   skillsUsed: 'Node.js, MySQL, Bootstrap',
    //   imgURL: './Wookies-Gold.png',
    //   alt: 'Wookies Gold',
    //   deployed: 'https://glacial-tor-15581.herokuapp.com/',
    //   github: 'https://github.com/pcondori1996/WookiesGold'
    // },
    {
      title: 'The Local Gym',
      skillsUsed: 'React, Tailwind',
      summary: 'A gym website template ready to be adjusted to suit other website\'s needs. Can be used for freelance work.',
      imgURL: './Local-Gym.jpg',
      alt: 'Local Gym',
      deployed: 'https://huntersteffner.github.io/Gym/',
      github: 'https://github.com/huntersteffner/Gym'
    },
    {
      title: 'Weather App',
      skillsUsed: 'JavaScript, Bootstrap',
      imgURL: './Weather-App.png',
      alt: 'Weather App',
      deployed: 'https://huntersteffner.github.io/Weather-App/',
      github: 'https://github.com/huntersteffner/Weather-App'
    },
    {
      title: 'Concert Finder',
      skillsUsed: 'Javascript, Bootstrap, Leaflet',
      imgURL: './Concert-Finder.png',
      alt: 'Concert Finder',
      deployed: 'https://huntersteffner.github.io/Concert-Finder/',
      github: 'https://github.com/huntersteffner/Concert-Finder'
    },
    {
      title: 'Social Blog',
      skillsUsed: 'Node.js, MySQL, Bootstrap',
      imgURL: './Social-Blog.png',
      alt: 'Social Blog',
      deployed: 'https://social-blog-steffner.herokuapp.com/',
      github: 'https://github.com/huntersteffner/Social-Blog-Website'
    },
    {
      title: 'Work Team Generator',
      skillsUsed: 'Node.js, Bootstrap, Inquirer',
      imgURL: './Work-Team-Generator.png',
      alt: 'Work Team Generator',
      deployed: 'https://huntersteffner.github.io/Work-Team-Generator/',
      github: 'https://github.com/huntersteffner/Work-Team-Generator'
    },
    {
      title: 'Password Generator',
      skillsUsed: 'HTML, CSS, JavaScript',
      imgURL: './Password-Generator.png',
      alt: 'Password Generator',
      deployed: 'https://huntersteffner.github.io/Password-Generator/',
      github: 'https://github.com/huntersteffner/Password-Generator'
    },
  ]

  return (
    <div className='content-container'>
      <Navbar />
      {/* react-router-dom routes */}
      <Routes>
        <Route path='/Portfolio-with-React/' element={<Home/>} />
        <Route path='/Portfolio-with-React/about-me' element={<AboutMe/>} />
        <Route path='/Portfolio-with-React/work' element={<Work projects={projects} />} />
        <Route path='/Portfolio-with-React/contact' element={<Contact/>} />
      </Routes>
      
      <Footer />
    </div>
  )
}
