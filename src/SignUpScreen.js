import React from 'react';
import './SignUpScreen.css'

function SignUpScreen(props) {
    return (
        <div className='signUpScreen'>
            <form >
                <h1>Sign In</h1>
                <input placeholder='Email' type='email' />
                <input placeholder='Password' type='password' />
                <button type='submit'>Sign In</button>
                <h4>something here</h4>
            </form>
        </div>
    );
}

export default SignUpScreen;