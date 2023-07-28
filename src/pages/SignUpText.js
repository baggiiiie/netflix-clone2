import React from 'react';
import './LoginScreen.css'

const SignUpText = ({onClick}) => {
    return (
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
                        onClick={onClick}
                        >Get Started</button>
                </form>
            </div>
        </>
    );
};

export default SignUpText;