import React, { cloneElement, useEffect, useState } from 'react';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import { useFormik } from "formik";
import * as yup from 'yup';

const Login = (props) => {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""

        },
        validationSchema: yup.object().shape({
            email: yup
            .string()
            .required("Email cannot be empty")
            .email("Invalid email"),
            password: yup
            .string()
            .required("Password cannot be empty")
            .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,"Weak password"),

        }),
        onSubmit: (values) => {
            console.log(values);
            loginClickHandler();
        }
    });

    const loginClickHandler = () => {
        //API call is made - Returns JWT Token
        const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        localStorage.setItem('access-token', jwtToken);
        props.history.push("/");
    }

    // const emailChangeHandler = (event) => {
    //     setEmail(event.target.value);
    // }

    // const passwordChangeHandler = (event) => {
    //     setPassword(event.target.value);
    // }

    const onBlur = (name) => {
        formik.setFieldTouched(name, true)
    }

    const onChangeHandler = (name, value) => {
        formik.setFieldValue(name, value);
    }

    // const onBlur = (name) => {
    //     switch (name) {
    //         case 'email':
    //             if (email !== '') {
    //                 if (!email.includes('@')) setErrorMessage({ ...errorMessage, email: "Invalid Email" });
    //                 else setErrorMessage({ ...errorMessage, email:"" });
    //             }
    //             break;

    //         case 'password':
    //             let regexExpression = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
    //             if (password !== '') {
    //                 if (password.length<6) setErrorMessage({ ...errorMessage, password: "Invalid Password" });
    //                 break;
    //             }
    //             if(!regexExpression.test(password)) {
    //                 setErrorMessage({ ...errorMessage, password: "Password should contain special Characters and alphanumeric" });
    //                 break;
    //             }
    //             setErrorMessage({ ...errorMessage, password: "" });
    //             break;

    //         default:
    //     }
    // }

    return (
        <div className="login">
            <div className="form-container">
                <div className="header-band">
                    <h3>HRMS</h3>
                </div>
                <form className="form" onSubmit={formik.handleSubmit}>
                    <div>
                        <Input
                            name='email'
                            classes={{ inputComponentClass: "login-input" }}
                            value={formik.values.email}
                            onChange={(event) => onChangeHandler(event.target.name,event.target.value)}
                            type="email"
                            placeHolder="Enter Email"
                            onBlur={(event) => onBlur(event.target.name)}
                            onFocus={() => { console.log("on focus") }}
                            errors={formik.errors.email}
                        />
                        <Input
                            name='password'
                            classes={{ inputComponentClass: "login-input" }}
                            value={formik.values.password}
                            onChange={(event) => onChangeHandler(event.target.name, event.target.value)}

                            placeHolder="Enter Password"
                            onBlur={(event) => onBlur(event.target.name)}
                            errors={formik.errors.password}
                        />
                    </div>
                    <Button type="submit" className="login-button">Login</Button>
                </form>
            </div>
        </div>
    )
}

export default Login;