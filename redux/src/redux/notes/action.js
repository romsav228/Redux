import { SET_NOTES_ERROR, SET_NOTES_DATA, SET_NOTES_LOADING } from "./constants";
import { Api } from '../../utils/api'
export const setNotesError = (payload) => ({
    type: SET_NOTES_ERROR,
    payload
})
export const setNotesData = (payload) => ({
    type: SET_NOTES_DATA,
    payload
})

export const setNotesLoading = () => ({
    type: SET_NOTES_LOADING,
})

export const setNotes = userId => async dispatch => {
    dispatch(setNotesLoading());
    try {
        const data = await Api.getNotes({ userId });
        dispatch(setNotesData(data));
    } catch (error) {
        dispatch(setNotesError(error));
    }
}

export const deleteNotes = (id, userId) => async dispatch => {
    try {
        await Api.deleteNotes(id);
        dispatch(setNotes(userId));
    } catch (error) {
        dispatch(setNotesError(error));
    }
}

export const addNote = newNote => async dispatch => {
    try {
        await Api.postNote(newNote);
        dispatch(setNotes(newNote.userId));
    } catch (error) {
        dispatch(setNotesError(error));
    }
}

export const editNote = newNote => async dispatch => {
    try {
        await Api.putNote(newNote);
        dispatch(setNotes(newNote.userId));
    } catch (error) {
        dispatch(setNotesError(error));
    }
}