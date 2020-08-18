import React from 'react';
import Dropdown from "./Dropdown";

class Course extends React.Component {
    render() {
        const { name, date, description, duration } = this.props.courseInfo;
        const { index } = this.props;
        return (
            <div className='course-entity'>
                <p className='course-date'>{date}</p>
                <p className='course-title'><b>{name}</b></p>
                <p className='course-description'>{description}</p>
                <p className='course-duration'>{duration}</p>
                <Dropdown index={index} />
            </div>
        )
    }
}

export default Course;