import React, { useState } from 'react';
import './LoginScreen.css';
import SignUpForm from './SignUpForm';
import SignUpText from './SignUpText';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginScreen'>
            <div className='loginScreen_background'>
                <img
                    className='loginScreen_logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                    alt='loginScreen_logo'
                />
                <button
                    className='loginScreen_button'
                    onClick={() => setSignIn(true)}
                >Sign In
                </button>
            </div>
            <div className='loginScreen_gradient' />

            <div className='loginScreen_body' >
                {signIn ? (
                    <SignUpForm />
                ) : (
                    <SignUpText onClick={() => setSignIn(true)} />
                )}
            </div>
        </div>
    );
}

export default LoginScreen;