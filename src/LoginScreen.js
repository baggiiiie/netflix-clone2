import React from 'react';
import './LoginScreen.css'

function LoginScreen() {
    return (
        <div className='loginScreen'>
            <div className='loginScreen_background'>
                <img 
                    className='loginScreen_logo'
                    // src='https://assets.stickong.com/images/580b57fcd999624bc43c529.png'
                    src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                    alt='loginScreen_background'
                />
                <button
                    className='loginScreen_button'
                    // onClick={}    
                >Sign In
                </button>
                <div className='loginScreen_gradient' />
            </div>
        
            <div className='loginScreen_body' >
                <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere, cancel at any time.</h2>
                    <h3>
                        Ready to watch? Enter your email to create or restart your membership.
                    </h3>
                    <div className='loginScreen_input'>
                        <form>
                            <input type='email' placeholder='Enter your Email to get started' />
                            <button className='loginScreen_getStarted'>Get Started</button>
                        </form>
                    </div>
                </>
            </div>
        </div>
    );
}

export default LoginScreen;