import * as types from "./auth.actionTypes"

const initialState = {
    isAuth: false,
    isError: false,
    isLoading: false,
    token: ""
}

export const authReducer = (state = initialState, {type,payload}) => {
    switch(type){

        case types.REGISTER_LOADING: {
            return {...state, isLoading: true, isError: false};
        }

        case types.REGISTER_SUCCESS: {
            return {...state, isLoading: false, isError: false};
        }

        case types.REGISTER_FAILURE: {
            return {...state, isLoading: false, isError: true}
        }

        case types.LOGIN_LOADING:{
            return {...state, isLoading: true, isError: false}
        }

        case types.LOGIN_SUCCESS: {
            return {...state, isAuth: true, isLoading: false, isError: false, token: payload.token}
        }

        case types.LOGIN_FAILURE: {
            return {...state, isAuth: false,isLoading: false, isError: true, token: ""}
        }

        default : return state
    }
}