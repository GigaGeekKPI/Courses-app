import React from 'react';
import './App.css';
import SearchForm from './SearchForm';
import AddCourseButton from './AddCourseButton'
import CourseList from './CourseList';
import { changeFilterAction } from './actions';
import { connect } from 'react-redux';
import AddForm from './AddForm'
import EditForm from './EditForm'

class App extends React.Component {
  render() {
    const { filter, courses, changeFilterAction, addForm, editForm } = this.props;

    return (
      <div className="App">
        <div className='content-wrapper'>
          <header className="App-header">
            <div className='header-wrapper'>
              <div className='logo' />
            </div>
          </header>
          {addForm && <AddForm />   || 
           editForm && <EditForm /> ||
            <article>
              <div className='search-section'>
                <SearchForm changeInput={changeFilterAction} />
                <AddCourseButton />
              </div>
              <main>
                <CourseList courses={courses} filterWord={filter} />
              </main>
            </article>
          }
        </div>
        <footer><p>© Videocourses, All Rights Reserved.</p></footer>
      </div>
    );
  }
}

const filterSelector = state => state.filter;
const courseSelector = state => state.courses;
const addFormSelector = state => state.addForm;
const editFormSelector = state => state.editForm;

const mapStateToProps = state => {
  return {
    filter: filterSelector(state),
    courses: courseSelector(state),
    addForm: addFormSelector(state),
    editForm: editFormSelector(state)
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    changeFilterAction: str => dispatch(changeFilterAction(str))
  });

export default connect(mapStateToProps, mapDispatchToProps)(App);