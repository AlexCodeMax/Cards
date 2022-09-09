import React from "react";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType, loginTC} from "./auth-reducer";
import {Navigate, NavLink} from "react-router-dom";
import {AppRootStateType} from "../app/store";
import {
    Button,
    Checkbox,

    FormControl,
    FormControlLabel,
    IconButton,
    Input,
    InputAdornment,
    InputLabel, Link, Paper,
    Typography
} from "@mui/material";
import {Visibility} from "@mui/icons-material";
import {validate} from "./utils/Validate";





 export const Login = () => {

     const dispatch = useDispatch()
     const {isLoggedIn} = useSelector<AppRootStateType, InitialStateType>(state => state.auth)

     const formik = useFormik({
         initialValues:{
             email: '',
             password: '',
             rememberMe: '',
         } as LoginParamsType,
         validate,
         onSubmit: values => {
             alert(JSON.stringify(values, null, 2));
             dispatch(loginTC(values) as any)
         },
     });


     if (isLoggedIn){
         return <Navigate to={'/profile'}/>
     }
    return (
       <section className={'login'} style={{backgroundColor: '#333333', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
          <div className="container" >
              <Paper className={'login-inner'} style={{padding: '20px 0px',marginTop: '10%', minWidth: '330px', margin: '0 auto'}}>
                  <div className="title">
                      <h2>Sign Up</h2>
                  </div>
                  <form onSubmit={formik.handleSubmit} className={'form'}>
                      <div className={'email'}>
                          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                              <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                          <Input
                              {...formik.getFieldProps('email')}
                          />

                              </FormControl>
                          {formik.touched.email && formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}
                      </div>
                      <div className={'password'}>
                          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                              <Input
                                  {...formik.getFieldProps('password')}
                                  id="standard-adornment-password"
                                  endAdornment={
                                      <InputAdornment position="end">
                                          <IconButton>
                                              <Visibility />
                                          </IconButton>
                                      </InputAdornment>
                                  }
                              />
                          </FormControl>
                          {formik.touched.password && formik.errors.password && <div style={{color: 'red'}}>{formik.errors.password}</div> }


                      </div>
                      <div className={'rememberMe'}>
                          <FormControlLabel sx={{ span: 2, fontWeight: '500', marginRight: '25%', marginBottom: '10px'}}
                              control={<Checkbox

                                  defaultChecked
                                  {...formik.getFieldProps('rememberMe')}
                              />} label={<Typography style={{fontWeight: '500',}}>Remember Me</Typography>}
                          />

                      </div>
                      <div style={{ marginBottom: '40px'}}  className="forgot-password">
                          <NavLink style={{fontWeight: '400' ,textDecoration: 'none', color: 'inherit', marginLeft: '110px'}} to={'/accountRecovery'}>
                              Forgot Password?
                          </NavLink>
                      </div>

                      <Button style={{width: '70%', borderRadius: '25px'}} variant={"contained"} type='submit' >Sign In</Button>

                      <div className="item">
                           <p className={'text'}>
                                Don't have an account?
                           </p>
                          <Link
                              style={ {cursor: 'pointer'}}
                              component={NavLink}
                              to="/register">
                              Sign Up
                          </Link>

                      </div>



                  </form>

              </Paper>
          </div>

       </section>
    );
};
 // types
export type LoginParamsType = {
    email?: string,
    password?: string,
    rememberMe?: '',
}