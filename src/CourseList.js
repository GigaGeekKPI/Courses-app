import React from 'react';
import Course from './Course'

class CourseList extends React.Component {
    render() {
        const { courses } = this.props;
        const filter = this.props.filterWord.toLowerCase();
        const filteredList = courses.filter(el => el.name.toLowerCase().indexOf(filter) > -1);

        return (
            <div>
                {filteredList.map(course => <Course courseInfo={course} index={courses.indexOf(course)} key={courses.indexOf(course)} />)}
            </div>)
    }
}

export default CourseList;