import React from 'react';
import { ShowAddFormAction } from './actions';
import { connect } from 'react-redux';

class AddCourseButton extends React.Component {
    render() {
        const { ShowAddForm } = this.props;

        return (
            <button className='add-button' onClick={ShowAddForm}>
                Add course
            </button>
        )
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        ShowAddForm: () => dispatch(ShowAddFormAction())
    });

export default connect(null, mapDispatchToProps)(AddCourseButton);