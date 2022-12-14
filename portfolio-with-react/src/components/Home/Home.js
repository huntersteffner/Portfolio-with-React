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

        <p>I was born and raised in Atlanta Georgia.</p>
        <p>
          I completed my undergrad at Georgia Southern University in the class
          of 2017 with a Major in Logistics and Minor in Spanish. (Sí, puedo
          hablar y trabajar en español, si es necesario)
        </p>
        <p>
          When I completed my undergrad I took a position at NCR Corporation as
          Customer Service Representative for Digital Banking Software. As I
          learned more about my employer's proprietary software in this role, I
          became fascinated with understanding how the applications functioned
          behind the scenes, and eventually began to self-teach myself the
          basics of HTML/CSS in my free time.
        </p>
        <p>
          After 4.5 years in the same role at NCR, I decided to make a career
          change and enrolled in a FullStack Web Development Bootcamp at Georgia
          Tech. For three months I essentially had to eat, sleep, and breathe
          the Frontend Web Development Languages of HTML, CSS, and JavaScript
          (and the framework of React) and the Backend Languages of Node.js,
          MySQL, and MongoDB.
        </p>
        <p>
          Feel free to check out my projects tab to see what I have been working
          on. If you would like to correspond regarding work opportunties, feel
          free to reach out to me below.
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
            href="Hunter-Steffner-Resume.pdf"
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
