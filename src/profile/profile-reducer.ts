import {authAPI, ResponseTypeAuth} from "../api/cardsAPI";
const initialState: ResponseTypeAuth = {
    _id: '',
    email: '',
    name: '',
    avatar: '',
    publicCardPacksCount: 0,
// количество колод

    created: '',
    updated: '',
    isAdmin: false,
    verified: false, // подтвердил ли почту
    rememberMe: false,
    error: '',
}

export const profileReducer = (state: ResponseTypeAuth = initialState, action: GetProfileACType | ChangeProfileNameType) => {
    switch (action.type) {
        case "SET-PROFILE":{
            return {...state, ...action.payload.dataProfile }
        }
        case "CHANGE-PROFILE-NAME": {
            return {...state, ...action.payload.dataProfile}
        }
        default: return state
    }
}
//actions
export const changeProfileNameAC = (data: ResponseTypeAuth) => ({type: 'CHANGE-PROFILE-NAME', payload: {dataProfile: data} } as const)
export const setProfileAC = (data: ResponseTypeAuth) => ({type: 'SET-PROFILE', payload: {dataProfile: data}} as const)
//type
type GetProfileACType = ReturnType<typeof setProfileAC>
type ChangeProfileNameType = ReturnType<typeof changeProfileNameAC>
//thunk
export const changeProfileNameTC = (value: string) => () => {
    authAPI.changeAvatarOrName(value)
        .then(res => {
            changeProfileNameAC(res.data)
        })
}