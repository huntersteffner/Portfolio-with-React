import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import classes from './Home.css'
// There is a link button so react-router-dom was also imported here
export default function Home() {
  return (
    <div className="home-container">
        {/* Image has a background url. See CSS page */}
      <div className="hero-image"></div>
      <div className="home-links">
        {/* Quick summary of me */}
        <h1>Matthew Hunter Steffner</h1>
        <h2>Full Stack Web Developer</h2>

        <p>I was born and raised in Atlanta, Georgia and currently live in Charlotte, North Carolina with my beautiful Peruvian wife.</p>
        <p>
          I completed my undergradate degree at Georgia Southern University in 2017 with a Major in Logistics and Minor in Spanish. (Sí, puedo
          hablar y trabajar en español, si es necesario).
        </p>
        <p>
          After college I began to work at NCR Corporation as a
          Customer Service Representative for Digital Banking Software. My company's proprietary software fascinated me, so I began to teach myself the
          basics of HTML, CSS, and JavaScript.
        </p>
        <p>
          After 4.5 years at NCR, I decided to make a career
          change and enrolled in a Full-Stack Web Development Bootcamp at Georgia Tech. After completing this course, I worked for a few months as a part-time Teaching Assistant, at a Coding Bootcamp very similar to the one I had studied under. In March 2023, I accepted an offer for a full-time position at Electrolux as an Angular Developer.
        </p>
        <p>Any Web Development request that you have, I can fulfill. I understand both Frontend and Backend Web Development. Frameworks of projects I have worked on include Angular, React, Springboot, Laravel, and more. Additionally, I am quite investigative by nature and can quickly learn how to work with other technologies as the job requires. Feel free to check out my projects tab to see what I have been working
          on.</p>
        <p>
          If you'd like for me to make your project a success, don't hesitate to reach out to me below.
        </p>
        {/* Link to contact me page */}
        <div className='link-btns'>
          <Link
            className="btn btn-primary link"
            to="/Portfolio-with-React/contact"
          >
            Contact Me
          </Link>
          {/* Link to download resume */}
          <a className='btn btn-primary link'
            href="Matthew-Hunter-Steffner-Resume.pdf"
            download="Matthew-Hunter-Steffner-Resume.pdf"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}
// Function for contact me page
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
