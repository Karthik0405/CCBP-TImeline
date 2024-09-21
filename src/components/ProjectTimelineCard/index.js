// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {item} = props
  return (
    <div>
      <img src={item.imageUrl} className="project-image" alt="project" />
      <div className="project-container">
        <h1 className="heading-project">{item.projectTitle}</h1>
        <div className="calender-container">
          <AiFillCalendar className="calender-icon" />
          <p className="time-duration">{item.duration}</p>
        </div>
      </div>
      <p className="project-description">{item.description}</p>
      <a href={item.projectUrl} className="project-url">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
