import React, {useEffect} from 'react';
import '../App.css';
import {Login} from "../auth/Login";
import {Route,Routes, Navigate} from "react-router-dom";
import Register from "../auth/Register";
import Profile from "../profile/Profile";
import AccountRecovery from "../auth/AccountRecovery";
import CheckEmail from "../auth/CheckEmail";
import CreateNewPassword from "../auth/CreateNewPassword";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {getAppAuthMeTC} from "../auth/auth-reducer";
import profile from "../profile/Profile";
import {Box, CircularProgress} from "@mui/material";


const App: React.FC = () => {
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)
    debugger
    console.log('render')

const dispatch = useDispatch()

  useEffect(() => {
        dispatch(getAppAuthMeTC() as any)

    },[])

if (!isInitialized){
    return <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <CircularProgress  />
    </Box>
}



  return (
    <div className="App" style={{height: '100vh'}}>

        <Routes>
            <Route path={'profile'} element={ <Profile />} />
            <Route path={'login'} element={ <Login />} />
            <Route path={'register'} element={ <Register />} />
            <Route path={'accountRecovery'} element={ <AccountRecovery />} />
            <Route path={'checkEmail'} element={ <CheckEmail />} />
            <Route path={'createNewPassword'} element={ <CreateNewPassword />} />
            <Route path={'/'} element={<Register />} />
            <Route path={'404'} element={<h1>404 PAge Net Found</h1>}/>
            <Route path={'*'} element={<Navigate to={'404'}/>}/>
        </Routes>

    </div>
  );
}

export default App;
