import React, { useState } from 'react';
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false)

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
                <div className='loginScreen_gradient' />
            </div>
        
            <div className='loginScreen_body' >
                {signIn ? (
                    <SignUpScreen />
                ) : (
                    <>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch anywhere, cancel at any time.</h2>
                        <h3>
                            Ready to watch? Enter your email to create or restart your membership.
                        </h3>
                        <div className='loginScreen_input'>
                            <form>
                                <input type='email' placeholder='Enter your Email to get started' />
                                <button 
                                    className='loginScreen_getStarted'
                                    onClick={() => setSignIn(true)}
                                    >Get Started</button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default LoginScreen;