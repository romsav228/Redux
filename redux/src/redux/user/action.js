import { SET_USER_DATA, SET_USER_LOADING, SET_USER_ERROR } from "./constants";
import { Api } from "../../utils/api"
import { User } from "../../utils/validation";
import { z } from "zod";
export const setUserError = payload => ({
    type: SET_USER_ERROR,
    payload
})

export const setUserLoading = () => ({
    type: SET_USER_LOADING
})

export const setUserData = payload => ({
    type: SET_USER_DATA,
    payload
})

export const loginUser = user => async dispatch => {
    try {
        const data = await Api.getUser(user.email, user.password);
        if (!data) {
            throw new Error("Такого пользователя нет")
        }
        dispatch(setUserData(data))
    } catch (error) {
        dispatch(setUserError(error))
    }
}
export const signupUser = user => async dispatch => {
    try {
        const { confirmedPassword, ...newUser } = User.parse(user);
        const existedUser = await Api.getUser(newUser.email, newUser.password);
        if (existedUser) {
            throw new Error("Такой пользователь уже существует")
        }
        const data = await Api.postUser(newUser);
        dispatch(setUserData(data));
    } catch (error) {
        if (error instanceof z.ZodError) {
            const { _errors, ...others } = error.format();
            const errors = Object.keys(others).reduce((acc, key) => {
                return {
                    ...acc,
                    [key]: others[key]._errors[0]
                };
            }, {});
            dispatch(setUserError(errors))
        } else {
            dispatch(setUserError(error))
        }
    }
}

