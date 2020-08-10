import React from 'react';
import { connect } from 'react-redux';
import { ToggleMenuAction, DeleteCourseAction, ShowEditFormAction } from './actions'

class Dropdown extends React.Component {

    render() {
        const { courses, ToggleMenu, DeleteCourse, ShowEditForm } = this.props;
        const { index } = this.props;

        const dropdown = (
            <ul className='dropdown'>
                <li onClick={ShowEditForm.bind(null, index)}>Edit</li>
                <li onClick={DeleteCourse.bind(null, index)}>Delete</li>
            </ul>)

        return (<div className='dots'>
            <span className="material-icons" onClick={ToggleMenu.bind(null, index)}>
                more_horiz
            </span>
            {courses[index].dropdown && dropdown}
        </div>);
    }
}

const courseSelector = state => state.courses;

const mapStateToProps = state => {
    return {
        courses: courseSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        ToggleMenu: index => dispatch(ToggleMenuAction(index)),
        DeleteCourse: index => dispatch(DeleteCourseAction(index)),
        ShowEditForm: index => dispatch(ShowEditFormAction(index))
    });

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);