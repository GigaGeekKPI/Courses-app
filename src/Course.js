import React from 'react';
import Dropdown from "./Dropdown";

class Course extends React.Component {
    render() {
        const { name, date, description, duration } = this.props.courseInfo;
        const { index } = this.props;
        return (
            <div className='course-entity'>
                <p className='courseDate'>{date}</p>
                <p className='courseTitle'><b>{name}</b></p>
                <p className='courseDescription'>{description}</p>
                <p className='courseDuration'>{duration}</p>
                <Dropdown index={index} />
            </div>
        )
    }
}

export default Course;