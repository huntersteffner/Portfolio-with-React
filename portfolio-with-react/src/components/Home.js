import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Home() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="home-container">
      <div className="hero-image"></div>
      <div className="home-links">
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

        <div className='link-btns'>
          <Link
            className="btn btn-primary link"
            to="/Portfolio-with-React/contact"
          >
            Contact Me
          </Link>
          
          <a className='btn btn-primary link'
            href="Hunter-Steffner-Resume.pdf"
            download="Hunter-Steffner-Resume.pdf"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
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
