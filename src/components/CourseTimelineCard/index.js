import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeline = props => {
  const {item} = props
  return (
    <div className="card-con">
      <div className="title-duration-con">
        <h1 className="title">{item.courseTitle}</h1>
        <div className="cal-dur-con">
          <AiFillClockCircle />
          <p className="duration">{item.duration}</p>
        </div>
      </div>
      <p className="project-discription">{item.description}</p>
      <div className="tags-con">
        {item.tagsList.map(each => (
          <p className="tag" key={each.id}>
            {each.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimeline
