// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  console.log(timelineItemsList)
  const renderHeading = () => (
    <div className="heading-container">
      <h1 className="heading">
        My JOURNEY OF <br />
        <span className="heading-ccbp">CCBP 4.0</span>
      </h1>
    </div>
  )

  const renderTimeLineCard = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard item={item} key={item.id} />
    }
    return <ProjectTimelineCard item={item} key={item.id} />
  }

  return (
    <div className="time-line-container">
      {renderHeading()}
      <Chrono
        mode="VERTICAL_ALTERNATING"
        theme={{
          secondary: 'white',
        }}
        items={timelineItemsList}
      >
        {timelineItemsList.map(eachItem => renderTimeLineCard(eachItem))}
      </Chrono>
    </div>
  )
}

export default TimelineView
