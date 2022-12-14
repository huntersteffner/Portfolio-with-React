export default function WorkCard(props) {
    return (
        <div className="project-card">
          <div className="project-img-container">
            <div className="project-img">
              <img src={props.imgURL} alt={props.alt} />
            </div>
          </div>
          <div className="project-desc">
            <h3>{props.title}</h3>
            <h4>{props.skillsUsed}</h4>
            <a className="btn btn-primary" target="_blank" href={props.deployed}>
              Deployed Site
            </a>
            <a className="btn btn-primary" target="_blank" href={props.github}>
              GitHub
            </a>
          </div>
        </div>

    )
  }