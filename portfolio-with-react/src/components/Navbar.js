import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav id="nav">
      <ul className="navbar navbar-light">
        <li>
          <CustomLink to="/Portfolio-with-React/">Home</CustomLink>
        </li>
        <li>
          <CustomLink to="/Portfolio-with-React/about-me">Skills</CustomLink>
        </li>
        <li>
          <CustomLink to="/Portfolio-with-React/work">Work</CustomLink>
        </li>
        <li>
          <a
            href="Hunter-Steffner-Resume.pdf"
            download="Hunter-Steffner-Resume.pdf"
          >
            Resume
          </a>
        </li>
        <li>
          <CustomLink to="/Portfolio-with-React/contact">Contact Me</CustomLink>
        </li>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
