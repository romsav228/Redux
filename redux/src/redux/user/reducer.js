import { SET_USER_DATA, SET_USER_LOADING, SET_USER_ERROR } from "./constants";
const initialState = {
    data: null,
    loading: false,
    error: null,
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER_LOADING:
            return { ...state, loading: true, error: null, data: null }
        case SET_USER_DATA:
            return { ...state, loading: false, error: null, data: payload }
        case SET_USER_ERROR:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}