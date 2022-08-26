export default function AboutMe() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="home-container">
      <div className="about-image"></div>
      <div className="about-desc">
        <h1>Skills</h1>
        <div className="skills-container">
          <div className="skills">
            <h2>Frontend Skills</h2>
            <ul>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JQuery</li>
              <li>Bootstrap</li>
              <li>Handlebars.js</li>
            </ul>
          </div>
          <div className="skills">
            <h2>Backend Skills</h2>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="skills">
            <h2>Other Skills</h2>
            <ul>
              <li>Git</li>
              <li>Visual Studio Code</li>
              <li>Public Speaking</li>
              <li>Problem Solving</li>
              <li>Customer Service</li>
              <li>Conflict Resolution</li>
              <li>Professional Writing</li>
              <li>Collaboration Experience</li>
              <li>Spanish Translation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
