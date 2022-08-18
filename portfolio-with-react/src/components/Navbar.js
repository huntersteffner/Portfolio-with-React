import React from 'react'

export default function Navbar() {
  const path = window.location.pathname


  return (
    <nav id='nav'>
      <ul className="navbar navbar-light">
        <li>
          <CustomLink href='/'>Home</CustomLink>
        </li>
        <li>
        <CustomLink href='/about-me'>About Me</CustomLink>
        </li>
        <li>
        <CustomLink href='/work'>Work</CustomLink>
        </li>
        <li>
        <CustomLink href='/resume'>Resume</CustomLink>
        </li>
        <li>
        <CustomLink href='/contact'>Contact Me</CustomLink>
        </li>
      </ul>
    </nav>
  )
}

function CustomLink({ href, children, ...props}) {
  const path = window.location.pathname
  return (
    <li className={path === href ? 'active': ''}>
      <a href={href}>{children}</a>
    </li>
  )
}