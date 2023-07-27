import React, { useEffect, useRef } from 'react';
import './SignUpScreen.css'
import {
    auth,
} from './firebase';

function SignUpScreen(props) {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            // auth,
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((user) => {
            console.log(user);
        })
        .catch((error) => {
            alert(error.message)
        });
    }
    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            // auth,
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((user) => {
            console.log(user)
        })
        .catch((error) => {
            alert(error.message)
        })
    }
    useEffect(() => {
        const cleanup = auth.onAuthStateChanged((user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              // ...
              console.log(user)
            } else {
              // User is signed out
              // ...
            }
          });
          return () => cleanup
    }, [])

    return (
        <div className='signUpScreen'>
            <form >
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder='Email' type='email' />
                <input ref={passwordRef} placeholder='Password' type='password' />
                <button type='submit' onClick={signIn}>Sign In</button>
                <h4>
                    <span className='signUpScreen_gray'>New to Netflix? </span>
                    <span className='signUpScreen_link' onClick={register}>Sign up now!</span>
                </h4>
            </form>
        </div>
    );
}

export default SignUpScreen;