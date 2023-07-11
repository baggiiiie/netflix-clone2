import React, { useRef } from 'react';
import './SignUpScreen.css'
import { auth } from './firebase';

function SignUpScreen(props) {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefualt();
        auth
        .createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message)
        });

    }
    const signIn = (e) => {
        e.preventDefualt()
    }

    return (
        <div className='signUpScreen'>
            <form >
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder='Email' type='email' />
                <input ref={passwordRef} placeholder='Password' type='password' />
                <button type='submit' onClick={signIn}>Sign In</button>
                <h4>
                    <span className='signUpScreen_gray'>New to Netflix?</span>
                    <span className='signUpScreen_link' onClick={register}>Sign up now!</span>
                </h4>
            </form>
        </div>
    );
}

export default SignUpScreen;