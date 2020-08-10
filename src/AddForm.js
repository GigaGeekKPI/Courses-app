import React from 'react';
import { AddCourseAction, HideFormAction } from './actions';
import { connect } from 'react-redux';

class AddForm extends React.Component {
    render() {
        const { AddCourse, HideForm } = this.props;

        function handleSubmit(event) {
            event.preventDefault();

            const data = new FormData(event.target);
            AddCourse(data);
        }

        return (
            <div className='form-container'>
                <h2>New course</h2>
                <form id='myForm' onSubmit={handleSubmit}>
                    <label htmlFor='title'>Title*</label>
                    <input required name='name' id='title'></input>
                    <label htmlFor='description'>Description*</label>
                    <textarea required name='description' id='description' rows='5'></textarea>
                    <div className='secondary-info'>
                        <label htmlFor='duration'>Duration*
                            <input required name='duration' id='duration'></input>
                        </label>
                        <label htmlFor='date'>Date*
                            <input required name='date' type='date' id='date'></input>
                        </label>
                        <label htmlFor='authors'>Authors*
                            <input required name='authors' id='authors'></input>
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

const mapDispatchToProps = dispatch => ({
    AddCourse: (smth) => dispatch(AddCourseAction(smth)),
    HideForm: () => dispatch(HideFormAction())
});

export default connect(null, mapDispatchToProps)(AddForm);