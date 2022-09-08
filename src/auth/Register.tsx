import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {InitialStateType, RegisterTC} from "./auth-reducer";
import {AppRootStateType} from "../app/store";
import {NavLink, useNavigate} from "react-router-dom";
import {Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Link, Paper} from "@mui/material";
import {Visibility} from "@mui/icons-material";
import {validate} from "./utils/Validate";

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isRegister} = useSelector<AppRootStateType, InitialStateType>(state => state.auth)
    useEffect(() => {
        if (isRegister){
            navigate('login')
        }
    },[isRegister])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
            validate,

        onSubmit: values => {
            debugger
            alert(values)
            dispatch(RegisterTC(values) as any)
        },
    })

    return (
        <div style={{textAlign: 'center'}}>
            <section className={'register'}>
                <div className="container">
                    <div className={'login'} style={{backgroundColor: '#333333', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
                        <Paper className={'login-inner'} style={{padding: '20px 0px',marginTop: '10%', minWidth: '330px', margin: '0 auto'}}>

                        <div className="title">
                            <h2>Sign Up</h2>
                        </div>
                        <form onSubmit={formik.submitForm} className={'form'}>
                            <div className={'email'}>

                                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                                    <Input
                                        {...formik.getFieldProps('email')}
                                    />

                                </FormControl>
                                {formik.touched.email && formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div> }


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
                            <div style={{marginBottom: '30px'}} className={'confirmPassword password'}>
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                                    <Input
                                        {...formik.getFieldProps('confirmPasword')}
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

                            </div>

                            <Button  style={{width: '70%', borderRadius: '25px'}} variant={"contained"} type='submit' >Sign Up</Button>


                            <div className="item">
                                <p className={'text'}>
                                    Already have an account
                                 </p>
                                <Link
                                    style={ {cursor: 'pointer'}}
                                    component={NavLink}
                                    to="/login">
                                    Sign In
                                </Link>
                            </div>


                        </form>
                        </Paper>
                    </div>
                </div>

            </section>
        </div>
    );
};



export default Register;