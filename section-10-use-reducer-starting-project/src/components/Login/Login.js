import React, {useContext, useEffect, useReducer, useRef, useState} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {value: action.val, isValid: action.val.includes('@')};
    } else if (action.type === 'INPUT_BLUR') {
        return {value: state.value, isValid: state.value.includes('@')};
    }

    return {value: '', isValid: false};
};

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {value: action.val, isValid: action.val.trim().length > 6};
    } else if (action.type === 'INPUT_BLUR') {
        return {value: state.value, isValid: state.value.trim().length > 6};
    }

    return {value: '', isValid: false};
}

const Login = (props) => {
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail]       = useReducer(emailReducer, {value: '', isValid: false});
    const [passwordState, dispatchPassword] = useReducer(passwordReducer,
        {value: '', isValid: false});

    const {isValid: emailIsValid}    = emailState;
    const {isValid: passwordIsValid} = passwordState;

    const authCtx = useContext(AuthContext);

    const emailInputRef    = useRef();
    const passwordInputRef = useRef();

    useEffect(() => {
            const identifier = setTimeout(() => {
                console.log('Checking form validity!');
                setFormIsValid(
                    emailIsValid && passwordIsValid,
                );
            }, 500);

            return () => {
                clearTimeout(identifier);
            };
        }, [emailIsValid, passwordIsValid],
    );

    const emailChangeHandler = (event) => {
        dispatchEmail({type: 'USER_INPUT', val: event.target.value});

        // setFormIsValid(
        //     event.target.value.includes('@') && passwordState.isValid,
        // );
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({type: 'USER_INPUT', val: event.target.value});

        // setFormIsValid(
        //     event.target.value.trim().length > 6 && emailState.isValid,
        // );
    };

    const validateEmailHandler = () => {
        // setEmailIsValid(emailState.isValid);
        dispatchEmail({type: 'INPUT_BLUR'});
    };

    const validatePasswordHandler = () => {
        dispatchEmail({type: 'INPUT_BLUR'});
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
            authCtx.onLogin(emailState.value, passwordState.value);
        } else if (!emailIsValid) {
            emailInputRef.current.focus();
        } else {
            passwordInputRef.current.focus();
        }
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                {/*<div*/}
                {/*    className={`${classes.control} ${*/}
                {/*        emailState.isValid === false ? classes.invalid : ''*/}
                {/*    }`}*/}
                {/*>*/}
                {/*    <label htmlFor="email">E-Mail</label>*/}
                <Input type="email"
                       id="email"
                       label="E-Mail"
                       ref={emailInputRef}
                       value={emailState.value}
                       isValid={emailIsValid}
                       onChange={emailChangeHandler}
                       onBlur={validateEmailHandler}/>
                {/*<input*/}
                {/*    type="email"*/}
                {/*    id="email"*/}
                {/*    value={emailState.value}*/}
                {/*    onChange={emailChangeHandler}*/}
                {/*    onBlur={validateEmailHandler}*/}
                {/*/>*/}
                {/*</div>*/}
                {/*<div*/}
                {/*    className={`${classes.control} ${*/}
                {/*        [passwordState.isValid] === false ? classes.invalid : ''*/}
                {/*    }`}*/}
                {/*>*/}
                {/*    <label htmlFor="password">Password</label>*/}
                <Input type="password"
                       id="password"
                       label="Password"
                       ref={passwordInputRef}
                       value={passwordState.value}
                       isValid={passwordIsValid}
                       onChange={passwordChangeHandler}
                       onBlur={validatePasswordHandler}/>
                {/*<input*/}
                {/*    type="password"*/}
                {/*    id="password"*/}
                {/*    value={passwordState.value}*/}
                {/*    onChange={passwordChangeHandler}*/}
                {/*    onBlur={validatePasswordHandler}*/}
                {/*/>*/}
                {/*</div>*/}
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    )
        ;
};

export default Login;
