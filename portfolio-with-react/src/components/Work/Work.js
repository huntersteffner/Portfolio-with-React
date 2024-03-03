import { Link } from 'react-router-dom'

export default function Work(props) {
  return (
    <div id="project-type-select">
      <Link className='project-type-link' to='/Portfolio-with-React/work/professional'><i class="fa fa-suitcase"></i> Professional Work</Link>
      <Link className='project-type-link' to='/Portfolio-with-React/work/projects'><i class="fa fa-desktop" aria-hidden="true"></i> Portfolio Projects</Link>
    </div>
  )
}
