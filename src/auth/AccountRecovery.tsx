import React, {useEffect} from "react";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {forgotGetPasswordTC, ForgotPasswordParamAC, InitialStateType} from "./auth-reducer";
import {NavLink, useNavigate} from "react-router-dom";
import {AppRootStateType} from "../app/store";
import {
    Button,
    FormControl,
    Input,
    InputLabel, Link, Paper,
} from "@mui/material";

const AccountRecovery = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isEmailForgotPassword} = useSelector<AppRootStateType, InitialStateType>((state) => state.auth)

    const formik = useFormik({


        initialValues:{
            email: '',
        } ,

        onSubmit: (values:{email: string}) => {
            debugger
            const data: ForgotPasswordParamAC = {...values,from: 'test-front-admin <ai73a@yandex.by>',message: `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href='http://localhost:3000/#/set-new-password/$token$'>
link</a>
</div>` }



            alert(JSON.stringify(values, null, 2));
            dispatch(forgotGetPasswordTC(data) as any)
        },
    });


    useEffect(() => {
        if (isEmailForgotPassword){
            navigate('/checkEmail')
        }
    },[isEmailForgotPassword, navigate])


    return (
        <section className={'login'}  style={{backgroundColor: '#333333', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
            <div className="container">
                <Paper className={'login-inner'} style={{padding: '20px 20px',marginTop: '10%', maxWidth: '270px', margin: '0 auto'}}>
                <div className={'login-inner'}>
                    <div className="title">
                        <h2>Forgot your password?</h2>
                    </div>
                    <form onSubmit={formik.handleSubmit} style={{marginBottom: '20px', minWidth: '100%'}} className={'form'}>
                        <div className={'email'}
                             style={{display: "flex",
                            alignItems: "center",
                            justifyContent: 'center'}}>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </FormControl>
                        </div>
                        {formik.touched.email && formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}
                        <div style={{marginBottom: '40px'}} className="forgot-password">
                            <p style={{fontWeight: '350', color: 'fff'}}>
                               Enter your email address and we will send you further instructions
                            </p>
                        </div>

                        <Button style={{width: '100%', borderRadius: '25px' ,marginBottom: '30px'}} variant={"contained"} type='submit' >Send instruction</Button>

                        <div className="item">
                           <span className={'text'} style={{marginBottom: '30px', display: 'inline-block'}}>
                              Did you remember your password?
                           </span>
                        </div>
                        <div className="item">
                            <Link
                                style={ {cursor: 'pointer'}}
                                component={NavLink}
                                to="/login">
                               Try Logging In
                            </Link>
                        </div>
                    </form>

                </div>
                </Paper>
            </div>

        </section>
    );
};

export default AccountRecovery;