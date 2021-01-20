import React from 'react';
import './login.css'
import Header from '../header/navigationBar';

const LoginPage = () => {
    return (
        <div>
            <Header />
            <form className='authorisation'>
                <input className='login-input' type="email" placeholder='EMAIL'/>
                <input className='login-input' type="password" placeholder='PASSWORD'/>
                <input className='login-input' type="password" placeholder='CONFIRM PASSWORD'/>
                <input className='login-submit' type="submit" value='LOGIN'/>
            </form>
        </div>
    )
}

export default LoginPage;
