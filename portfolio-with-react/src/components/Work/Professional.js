import WorkCard from './WorkCard'

export default function Professional(props) {
  return (
    <div>
      <div id="project-list">
        {/* List of projects I've worked on */}
        {props.projects.map((data) => {
          return (
            <WorkCard
            title={data.title}
            skillsUsed={data.skillsUsed}
            summary={data.summary}
            imgURL={data.imgURL}
            alt={data.alt}
            deployed={data.deployed}
            github={data.github}
            />
          )
        })}
      </div>
    </div>
  )
}
