import WorkCard from './WorkCard'

export default function Work(props) {
  return (
    <div>
      <div id="project-list">
        {/* List of projects I've worked on */}
        <WorkCard
          title={props.projects[0].title}
          skillsUsed={props.projects[0].skillsUsed}
          summary={props.projects[0].summary}
          imgURL={props.projects[0].imgURL}
          alt={props.projects[0].alt}
          deployed={props.projects[0].deployed}
          github={props.projects[0].github}
        />
        <WorkCard
          title={props.projects[1].title}
          skillsUsed={props.projects[1].skillsUsed}
          summary={props.projects[1].summary}
          imgURL={props.projects[1].imgURL}
          alt={props.projects[1].alt}
          deployed={props.projects[1].deployed}
          github={props.projects[1].github}
        />
        <WorkCard
          title={props.projects[2].title}
          skillsUsed={props.projects[2].skillsUsed}
          imgURL={props.projects[2].imgURL}
          alt={props.projects[2].alt}
          deployed={props.projects[2].deployed}
          github={props.projects[2].github}
        />
        <WorkCard
          title={props.projects[3].title}
          skillsUsed={props.projects[3].skillsUsed}
          imgURL={props.projects[3].imgURL}
          alt={props.projects[3].alt}
          deployed={props.projects[3].deployed}
          github={props.projects[3].github}
        />
        <WorkCard
          title={props.projects[4].title}
          skillsUsed={props.projects[4].skillsUsed}
          imgURL={props.projects[4].imgURL}
          alt={props.projects[4].alt}
          deployed={props.projects[4].deployed}
          github={props.projects[4].github}
        />
        <WorkCard
          title={props.projects[5].title}
          skillsUsed={props.projects[5].skillsUsed}
          imgURL={props.projects[5].imgURL}
          alt={props.projects[5].alt}
          deployed={props.projects[5].deployed}
          github={props.projects[5].github}
        />
      </div>
    </div>
  )
}
