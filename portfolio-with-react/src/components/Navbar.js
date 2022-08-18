import React from 'react'

export default function Navbar() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <nav id='nav'>
      <ul className="navbar navbar-light">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about-me">About Me</a>
        </li>
        <li>
          <a href="/work">Work</a>
        </li>
        <li>
          <a href="/resume">Resume</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
