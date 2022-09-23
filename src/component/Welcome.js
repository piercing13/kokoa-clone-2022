import React, {useState,useEffect} from 'react'
import './welcome.css'
import { Link } from 'react-router-dom';
import StatusBar from './StatusBar';
function Welcome() {
    

  return (
    <div className='container'>
        
        <div className='containerBox'>
            
        <StatusBar/>
            <div className='welcome-header'>
                <h2 className='welcome-header__title'>
                    Welcome to KokoaTalk
                </h2>
                <p className='welcome-header__text'>
                    If you have a Kakao Account, <span> log in with your email or phone number.</span>
                </p>
            </div>

            <form className='login-form'>
                <input type="text" placeholder='Email or phone number'></input>
                <input type="password" placeholder='Password'></input>
                <Link to='/friends'>
                    <button type='submit'>Log In</button>
                </Link>
                
                <button type='submit'>Sign Up</button>
                <p>Find Kokoa <span>Account</span> or <span>Password</span></p>
            </form>

            

        </div>
        
    </div>
  )
}

export default Welcome