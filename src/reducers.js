import courses from './coursesDB';
import {
    CHANGE_FILTER_INPUT,
    TOGGLE_MENU_VISIBILITY,
    DELETE_COURSE,
    EDIT_COURSE,
    ADD_COURSE,
    SHOW_ADD_FORM,
    SHOW_EDIT_FORM,
    HIDE_FORM
} from './actions';

let initUI = courses.map(el => ({ ...el, dropdown: false }));
let initialState = {
    courses: initUI,
    filter: '',
    addForm: false,
    editForm: false,
    editIndex: null
}
export default function rootReducer(state = initialState, action) {
    const copiedArray = [...state.courses.map(el => ({ ...el, dropdown: false }))];
    switch (action.type) {
        case CHANGE_FILTER_INPUT:
            return { ...state, filter: action.payload };
        case TOGGLE_MENU_VISIBILITY:
            copiedArray[action.payload].dropdown = !copiedArray[action.payload].dropdown;
            return { ...state, courses: copiedArray };
        case DELETE_COURSE:
            copiedArray.splice(action.payload, 1);
            return { ...state, courses: copiedArray };
        case SHOW_EDIT_FORM:
            return { ...state, editForm: true, editIndex: action.payload, filter: '' };
        case ADD_COURSE:
            let newCourse = {};
            for (let [key, value] of action.payload.entries()) {
                if (key === 'date') {
                    value = value.split('-').reverse().join('.');
                }
                newCourse[key] = value;
            }
            copiedArray.unshift(newCourse);
            return { ...state, addForm: false, courses: copiedArray };
        case SHOW_ADD_FORM:
            return { ...state, addForm: true, filter: '' }
        case HIDE_FORM:
            return { ...state, addForm: false, editForm: false, courses: copiedArray };
        case EDIT_COURSE:
            let editingCourse = copiedArray[action.payload.index];
            for (let [key, value] of action.payload.formData.entries()) {
                if (key === 'date') {
                    value = value.split('-').reverse().join('.');
                }
                editingCourse[key] = value;
            }
            return { ...state, courses: copiedArray, editForm: false };
        default: return state;
    }
}