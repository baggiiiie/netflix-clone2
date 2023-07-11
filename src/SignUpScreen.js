import React from 'react';
import './SignUpScreen.css'

function SignUpScreen(props) {
    const register = (e) => {
        e.preventDefualt()
    }
    const signIn = (e) => {
        e.preventDefualt()
    }

    return (
        <div className='signUpScreen'>
            <form >
                <h1>Sign In</h1>
                <input placeholder='Email' type='email' />
                <input placeholder='Password' type='password' />
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