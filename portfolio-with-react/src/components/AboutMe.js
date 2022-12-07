export default function AboutMe() {
    // The about me page. It displays my skills
  return (
    <div className="home-container">
      <div className="about-image"></div>
      <div className="about-desc">
        <h1>Skills</h1>
        <div className="skills-container">
            {/* Each skills card has skills for different categories */}
          <div className="skills">
            <h2>Frontend Skills</h2>
            <ul>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>JQuery</li>
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
