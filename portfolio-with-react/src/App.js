import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe'
import Work from './components/Work/Work'
import Professional from './components/Work/Professional'
import Projects from './components/Work/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import bnbNetwork from './assets/Bnb-Network.png'
import localGym from './assets/Local-Gym.jpg'
import passwordGenerator from './assets/Password-Generator.png'
import workTeamGenerator from './assets/Work-Team-Generator.png'
import frigidaire from './assets/Frigidaire.png'
import electrolux from './assets/Electrolux.png'

export default function App() {
  const professional = [
    {
      title: 'Frigidaire',
      skillsUsed: 'Angular, Bootstrap, SAP Backoffice (CMS)',
      summary: 'This is the main site I work on for my full-time position at Electrolux. It is an ecommerce site for Frigidaire appliances.',
      imgURL: frigidaire,
      alt: 'Frigidaire',
      deployed: 'https://www.frigidaire.com/en/',
    },
    {
      title: 'Electrolux',
      skillsUsed: 'Angular, Bootstrap, SAP Backoffice (CMS)',
      summary: 'This is a site I regularly work on for my full-time position at Electrolux. It is an ecommerce site for Electrolux appliances.',
      imgURL: electrolux,
      alt: 'Frigidaire',
      deployed: 'https://www.electrolux.com/en/',
    },
  ]

  const projects = [
    {
      title: 'Bnb Network',
      skillsUsed: 'Firebase, React, Tailwind, & Daisy UI',
      summary: 'This is a Full Stack Bed and Breakfast website that was inspired by AirBnb. Users can register, login, create bnb locations, book trips to existing locations, and view complete trip history. UI was made mostly with the Daisy UI Tailwind Library',
      imgURL: bnbNetwork,
      alt: 'BnB Network',
      deployed: 'https://bnb-network.vercel.app/',
      github: 'https://github.com/huntersteffner/bnb-network'
    },
    {
      title: 'The Local Gym',
      skillsUsed: 'React & Tailwind',
      summary: 'A gym website template ready to be adjusted to suit other website\'s needs. Can be used for freelance work. Almost all CSS styling was custom designed',
      imgURL: localGym,
      alt: 'Local Gym',
      deployed: 'https://huntersteffner.github.io/Gym/',
      github: 'https://github.com/huntersteffner/Gym'
    },
    {
      title: 'Work Team Generator',
      skillsUsed: 'Node.js, Bootstrap, Inquirer',
      imgURL: workTeamGenerator,
      alt: 'Work Team Generator',
      deployed: 'https://huntersteffner.github.io/Work-Team-Generator/',
      github: 'https://github.com/huntersteffner/Work-Team-Generator'
    },
    {
      title: 'Password Generator',
      skillsUsed: 'HTML, CSS, JavaScript',
      imgURL: passwordGenerator,
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
        <Route path='/Portfolio-with-React/work/professional' element={<Professional projects={professional} />} />
        <Route path='/Portfolio-with-React/work/projects' element={<Projects projects={projects} />} />
        <Route path='/Portfolio-with-React/contact' element={<Contact/>} />
      </Routes>
      
      <Footer />
    </div>
  )
}
