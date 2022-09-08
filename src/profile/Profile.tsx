import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../app/store";
import {InitialStateType, LogOutTC} from "../auth/auth-reducer";
import {ResponseTypeAuth} from "../api/cardsAPI";
import {useNavigate} from "react-router-dom";
import {Avatar, Paper} from "@mui/material";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import EditableSpan from "../components/EditableSpan";
import {changeProfileNameTC} from "./profile-reducer";

const theme = createTheme({
    palette: {
        neutral: {
            main: '#fff',
            contrastText: '#6e6d6d',


        },
    },
});

declare module '@mui/material/styles' {
    interface Palette {
        neutral: Palette['primary'];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
    }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        neutral: true;
    }
}
const Profile = () => {


    const {isLoggedIn} = useSelector<AppRootStateType, InitialStateType>(state => state.auth)
    const profile = useSelector<AppRootStateType, ResponseTypeAuth>(state => state.profile)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        debugger
        if (!isLoggedIn){
            navigate('/login')
        }
    },[isLoggedIn])
const logoutHandler = () => {
        dispatch(LogOutTC() as any)
}

 const changeNameHandel  = (value: string) => {
dispatch(changeProfileNameTC(value) as any)
 }
    return (

        <section className={'profile'} style={{backgroundColor: '#333333', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
            <Paper className={'login-inner'} style={{padding: '20px 0px',marginTop: '10%', minWidth: '330px', margin: '0 auto'}}>
            <div className="profile-info">
                <h2 className={'profile__text'}>Personal information</h2>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px'}} className="profile__img">
                    <Avatar
                        alt="Remy Sharp"
                        src={`${profile.avatar ? profile.avatar : 'profile.avatar"/static/images/avatar/1.jpg'} `}
                        sx={{ textAlign: 'center', width: 90, height: 90 }}
                    />
                </div>

                <EditableSpan changeNameHandel={changeNameHandel} name={profile.name}/>
                <div style={{marginBottom: '40px'}} className="profile__email">
                    <p>{profile.email}</p>
                </div>
                <div className="profile__logOut">
                    <ThemeProvider theme={theme}>
                        <Button
                            color={'neutral'}
                            onClick={logoutHandler}
                            style={{width: '40%', borderRadius: '25px', fontWeight: '600'}}
                            variant={"contained"} type='submit' >
                            <span style={{width: '15px', height: '15px', paddingRight: '10px', display: 'flex', alignItems: 'center'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" id="ac0e4468-8c4e-4c82-ab79-d84fa5e8775a" viewBox="0 0 35 35"><path d="M17.54,34.75a17.25,17.25,0,0,1,0-34.5,1.25,1.25,0,0,1,0,2.5,14.75,14.75,0,0,0,0,29.5,1.25,1.25,0,0,1,0,2.5Z"/><path d="M32.927,18.75H15.25a1.25,1.25,0,0,1,0-2.5H32.927a1.25,1.25,0,0,1,0,2.5Z"/><path d="M26.536,26.438a1.25,1.25,0,0,1-.884-2.134l6.384-6.385a.6.6,0,0,0,0-.839L25.652,10.7A1.25,1.25,0,1,1,27.42,8.929L33.8,15.313a3.1,3.1,0,0,1,0,4.374L27.42,26.072A1.246,1.246,0,0,1,26.536,26.438Z"/></svg>
                            </span>
                            Log out

                        </Button>
                    </ThemeProvider>

                </div>
                
            </div>
            </Paper>
        </section>

    );
};

export default Profile;