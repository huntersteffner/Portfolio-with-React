export default function Work() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div>
      <div id="project-list">
        <div className="project-card">
          <div className="project-img">
            <img src="./Wookies-Gold.png" alt="Wookies Gold" />
          </div>
          <div className="project-desc">
            <h3>Wookies Gold</h3>
            <h4>Node.js, MySQL, Bootstrap</h4>
            <a className="btn btn-primary" href="">Deployed Site</a>
            <a className="btn btn-primary" href="">GitHub</a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img">
            <img src="./Weather-App.png" alt="Weather App" />
          </div>
          <div className="project-desc">
            <h3>Weather App</h3>
            <h4>JavaScript, Bootstrap</h4>
            <a className="btn btn-primary" href="">Deployed Site</a>
            <a className="btn btn-primary" href="">GitHub</a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img">
            <img src="./Concert-Finder.png" alt="Concert Finder" />
          </div>
          <div className="project-desc">
            <h3>Concert Finder</h3>
            <h4>Javascript, Bootstrap, Leaflet</h4>
            <a className="btn btn-primary" href="">Deployed Site</a>
            <a className="btn btn-primary" href="">GitHub</a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img">
            <img src="./Social-Blog.png" alt="Social Blog" />
          </div>
          <div className="project-desc">
            <h3>Social Blog</h3>
            <h4>Node.js, MySQL, Bootstrap</h4>
            <a className="btn btn-primary" href="">Deployed Site</a>
            <a className="btn btn-primary" href="">GitHub</a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img">
            <img src="./Work-Team-Generator.png" alt="Work Team Generator" />
          </div>
          <div className="project-desc">
            <h3>Work Team Generator</h3>
            <h4>Node.js, Bootstrap, Inquirer</h4>
            <a className="btn btn-primary" href="">Deployed Site</a>
            <a className="btn btn-primary" href="">GitHub</a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img">
            <img src="./Password-Generator.png" alt="Password Generator" />
          </div>
          <div className="project-desc">
            <h3>Password Generator</h3>
            <h4>HTML, CSS, JavaScript</h4>
            <a className="btn btn-primary" href="">Deployed Site</a>
            <a className="btn btn-primary" href="">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  )
}
