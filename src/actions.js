export const CHANGE_FILTER_INPUT = 'CHANGE_FILTER_INPUT';
export const TOGGLE_MENU_VISIBILITY = 'TOGGLE_MENU_VISIBILITY';
export const DELETE_COURSE = 'DELETE_COURSE';
export const ADD_COURSE = 'ADD_COURSE';
export const SHOW_ADD_FORM = 'SHOW_ADD_FORM';
export const SHOW_EDIT_FORM = 'SHOW_EDIT_FORM';
export const EDIT_COURSE = 'EDIT_COURSE';
export const HIDE_FORM = 'HIDE_FORM';

export function changeFilterAction(str) {
    return {
        type: CHANGE_FILTER_INPUT,
        payload: str
    }
}

export function ToggleMenuAction(index) {
    return {
        type: TOGGLE_MENU_VISIBILITY,
        payload: index
    }
}

export function DeleteCourseAction(index) {
    return {
        type: DELETE_COURSE,
        payload: index
    }
}

export function ShowEditFormAction(index) {
    return {
        type: SHOW_EDIT_FORM,
        payload: index
    }
}

export function EditCourseAction(index, formData) {
    return {
        type: EDIT_COURSE,
        payload: {index, formData}
    }
}

export function AddCourseAction(formData) {
    return {
        type: ADD_COURSE,
        payload: formData
    }
}

export function HideFormAction() {
    return {
        type: HIDE_FORM
    }
}

export function ShowAddFormAction () {
    return {
        type: SHOW_ADD_FORM
    }
}
