import {applyMiddleware, combineReducers, createStore, Dispatch} from "redux";
import thunk from "redux-thunk";
import {appReducer} from "./app-reducer";
import {authReducer} from "../auth/auth-reducer";
import {profileReducer} from "../profile/profile-reducer";

export type  AppRootStateType = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    profile: profileReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk))

