import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
  return (
    // This navbar uses react-router-dom to link to different pages.
    <nav id="nav">
      <ul className="navbar navbar-light">
        <li>
          {/* Essentially an about me page */}
          <CustomLink to="/Portfolio-with-React/">Home</CustomLink>
        </li>
        <li>
          {/* Shows my skills */}
          <CustomLink to="/Portfolio-with-React/about-me">Skills</CustomLink>
        </li>
        <li>
          {/* Shows projects I have worked on */}
          <CustomLink to="/Portfolio-with-React/work">Work</CustomLink>
        </li>
        <li>
          {/* Regular href. It is a link to download my resume */}
          <a
            href="Hunter-Steffner-Resume.pdf"
            download="Matthew-Hunter-Steffner-Resume.pdf"
          >
            Resume
          </a>
        </li>
        <li>
          {/* Contact me page. It has a working contact me form */}
          <CustomLink to="/Portfolio-with-React/contact">Contact Me</CustomLink>
        </li>
      </ul>
    </nav>
  )
}
// Function for Routes to work. Copied from documentation
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
