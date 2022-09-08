import {LoginParamsType} from "../Login";

export  const  validate = (values: any) => {

    const errors: LoginParamsType = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password){
        errors.password = 'Required'
    }
    else if(values.password.length < 4){
        errors.password = 'Invalid password address';
    }

    return errors;
}