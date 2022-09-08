import {authAPI, ResponseTypeAuth} from "../api/cardsAPI";
import {Dispatch} from "redux";

const initialSate: initialAppStateType = {
    status: 'idle',
    error: null,
    isInitialized: false
}





export const appReducer = (state= initialSate, actions: AppActionsType ) => {
switch (actions.type) {
    case "APP/SET-ERROR": {
        return {...state, error: actions.errorMessage}
    }
    case "APP/SET-STATUS": {
        return {...state, status: actions.status}
    }
    case "APP/SET-INITIALIZE":{
        return {...state, isInitialized: actions.isInitialized}
    }
    default: return  state
}
}


export const setAppErrorAC = (errorMessage: string | null) => ({type: 'APP/SET-ERROR', errorMessage} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setAppIsInitializeAC = (isInitialized: boolean) => ({type: 'APP/SET-INITIALIZE', isInitialized} as const)


//actions types

export type SetErrorActionType = ReturnType<typeof setAppErrorAC>;
export type SetStatusActionType = ReturnType<typeof  setAppStatusAC>;
export type SetAppIsInitializedType = ReturnType<typeof setAppIsInitializeAC>
export type AppActionsType =
    | SetErrorActionType
    | SetStatusActionType
    | SetAppIsInitializedType


// params AC types

//initializedType
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type initialAppStateType = {
    status: RequestStatusType
    error: null | string
    isInitialized: boolean
}


