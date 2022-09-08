import {LoginParamsType} from "./Login";
import {authAPI} from "../api/cardsAPI";
import {Dispatch} from "redux";
import {setProfileAC} from "../profile/profile-reducer";
import {setAppIsInitializeAC} from "../app/app-reducer";


const InitialState: InitialStateType = {
    isLoggedIn: false,
    isRegister: false,
    isEmailForgotPassword: false
}
export type InitialStateType = {
    isLoggedIn: boolean
    isRegister :boolean
    isEmailForgotPassword :boolean
}

export const authReducer = (state=InitialState, action: ActionsType) => {
    switch (action.type) {
        case "login/SET-IS-LOGGED-IN":{
            return {...state, isLoggedIn: action.payload.value}
        }
        case "login/REGISTER":{
            return {...state, isRegister: action.payload.value}
        }
        case "login/LOGOUT":{
            return {...state, isLoggedIn: action.payload.value}
        }
        default:
            return state
    }
}

//action
const loginAC = (data: boolean) => {
    return {type: 'login/SET-IS-LOGGED-IN', payload: {value: data}} as const
}
const registerAC = (data: boolean) => {
    return {type: 'login/REGISTER', payload: {value: data}} as const
}
const authMeAC = (data: {}) => {
    return {type: 'login/AUTH-ME', payload:{value: data}} as const
}
const changeAvatarOrNameAC = (data: changeAvatarOrNameParamAC) => {
    return {type: 'login/CHANGE-AVATAR-OR-NAME', payload: {value: data}} as const
}
const logoutAC = (data: {}) => {
    return {type: 'login/LOGOUT', payload: {value: data}} as const
}
const forgotPasswordAC = (data: boolean) => {
    return {type: 'login/FORGOT-PASSWORD', payload:{value: data}} as const
}
const newPasswordAC = (data: NewPasswordParamsAC) => {
    return {type: 'login/NEW-PASSWORD', payload: {value: data}} as const
}

//thunk
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch)=> {
    authAPI.login(data)
        .then(res => {
        dispatch(loginAC( true))
        dispatch(registerAC(true))
        dispatch(setProfileAC(res.data))
    })
        .catch(e => {
            const error = e.response ? e.response.data.error : (e.message+ 'more details in the console')
            console.log(error)
        })
}
export const RegisterTC = (data: RegisterParamAC) => (dispatch: Dispatch)=> {
    debugger
    authAPI.register(data)
        .then(res => {
            debugger
           // dispatch(registerAC(true))
        })
        .catch(e => {
            debugger
            const error = e.response ? e.response.data.error : (e.message+ 'more details in the console')
            console.log(error)
        })
}
export const LogOutTC = () => (dispatch: Dispatch)=> {
    authAPI.logAut()
        .then(res => {
            dispatch(logoutAC( false))
        })
        .catch(e => {
            const error = e.response ? e.response.data.error : (e.message+ 'more details in the console')
            console.log(error)
        })
}
export const getAppAuthMeTC = () => (dispatch: Dispatch) => {

    authAPI.authMe()
        .then(res => {
            debugger
            dispatch(loginAC(true))
            dispatch(setProfileAC(res.data))
            }

        )
        .catch((error) => {

        })
        .finally(() => {
           dispatch(setAppIsInitializeAC(true))
        })
}
export const forgotGetPasswordTC = (data: ForgotPasswordParamAC) => (dispatch: Dispatch) => {
    debugger
    authAPI.forgotPassword(data)
        .then(res => {
            debugger
            dispatch(forgotPasswordAC(false))
        })
}

//actions types
type ActionsType = LoginACType | RegisterACType | AuthMeACType | ChangeAvatarOrNameACType | LogoutACType | ForgotPasswordACType | NewPasswordACType
type LoginACType = ReturnType<typeof loginAC>
type RegisterACType = ReturnType<typeof registerAC>
type AuthMeACType = ReturnType<typeof authMeAC>
type ChangeAvatarOrNameACType = ReturnType<typeof changeAvatarOrNameAC>
type LogoutACType = ReturnType<typeof logoutAC>
type ForgotPasswordACType = ReturnType<typeof forgotPasswordAC>
type NewPasswordACType = ReturnType<typeof newPasswordAC>

// params AC types

export type RegisterParamAC = {
    email: string
    password:string
    confirmPassword: string

}
type changeAvatarOrNameParamAC = {
    name: string
    avatar: string
}
export type ForgotPasswordParamAC = {
    email: string
    from: string
    message: string
}
type NewPasswordParamsAC = {
    password: string
    resetPasswordToken: string
}