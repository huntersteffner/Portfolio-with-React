import React from 'react'

export default function Navbar() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <ul className="navbar navbar-light bg-light">
      <li className='navbar-brand'>About Me</li>
      <li className='navbar-brand'>Skills</li>
      <li className='navbar-brand'>Work</li>
      <li className='navbar-brand'>Resume</li>
      <li className='navbar-brand'>Contact Me</li>
    </ul>
  )
}
