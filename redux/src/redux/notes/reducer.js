import { SET_NOTES_DATA, SET_NOTES_ERROR, SET_NOTES_LOADING } from "./constants"

const initialState = {
    data: [],
    error: null,
    loading: false
}

export const notesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_NOTES_DATA:
            return { ...state, data: payload, loading: false, error: null }
        case SET_NOTES_LOADING:
            return { ...state, loading: true, error: null, data: [] }
        case SET_NOTES_ERROR:
            return { ...state, loading: false, error: payload }
        default: return state
    }
}