import axios from "axios";
import {ForgotPasswordParamAC, RegisterParamAC} from "../auth/auth-reducer";


export const instance = axios.create({
    baseURL:'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const authAPI = {
    login(params: any){
      return instance.post<ResponseTypeAuth>('auth/login',params)
    },
    register(params: RegisterParamAC){

        return instance.post<ResponseTypeAuthRegister>('auth/register',params )
    },
    authMe(){
        return instance.post('auth/me',{})
    },
    changeAvatarOrName(params: string){
        return instance.put('auth/me', {name: params, avatar: "https//avatar-url.img"})
    },
    logAut(){
        return instance.delete('auth/me',{})
    },
    forgotPassword(params: ForgotPasswordParamAC){
        return instance.post('auth/forgot',params)
    },
    changePassword(params: any) {
        return instance.post('auth/set-new-password',params)
    }

}

export type ResponseTypeAuth = {
     _id: string;
     email: string;
     name: string;
     avatar?: string;
     publicCardPacksCount: number;
// количество колод

     created: string;
     updated: string;
     isAdmin: boolean;
     verified: boolean; // подтвердил ли почту
     rememberMe: boolean;

     error?: string;
 }
 type ResponseTypeAuthRegister = {
    addedUser:{}
     error?: string,
 }