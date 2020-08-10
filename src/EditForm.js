import React from 'react';
import { EditCourseAction, HideFormAction } from './actions';
import { connect } from 'react-redux';

class EditForm extends React.Component {
    render() {
        const { EditCourse, HideForm, courses, index } = this.props;

        function handleSubmit(event) {
            event.preventDefault();

            const data = new FormData(event.target);
            EditCourse(0, data);
        }

        const date = courses[index].date.split('.').reverse().join('-');

        return (
            <div className='form-container'>
                <h2>Edit course</h2>
                <form id='myForm' onSubmit={handleSubmit}>
                    <label htmlFor='title'>Title*</label>
                    <input required name='name' id='title' defaultValue={courses[index].name}></input>
                    <label htmlFor='description'>Description*</label>
                    <textarea required name='description' id='description' rows='5' defaultValue={courses[index].description}></textarea>
                    <div className='secondary-info'>
                        <label htmlFor='duration'>Duration*
                            <input required name='duration' id='duration' defaultValue={courses[index].duration}></input>
                        </label>
                        <label htmlFor='date'>Date*
                            <input required name='date' type='date' id='date' defaultValue={date}></input>
                        </label>
                        <label htmlFor='authors'>Authors*
                            <input required name='authors' id='authors' defaultValue={courses[index].authors}></input>
                        </label>
                    </div>
                    <div className='buttons-section'>
                        <button className='add-button save' type='submit'>
                            Save
                        </button>
                        <button className='cancel-button' onClick={HideForm}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>)
    }
}

const courseSelector = state => state.courses;
const indexSelector = state => state.editIndex;

const mapStateToProps = state => {
    return {
        courses: courseSelector(state),
        index: indexSelector(state)
    }
}

const mapDispatchToProps = dispatch => ({
    EditCourse: (index, smth) => dispatch(EditCourseAction(index, smth)),
    HideForm: () => dispatch(HideFormAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);