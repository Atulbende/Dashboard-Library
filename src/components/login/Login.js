import React, { useState } from 'react'
import '../login/login.css'
export default function Login() {

    const [loginAnim,setLoginAnim]=useState('');
    const [signupAnim,setSignupAnim]=useState('d-none');

  return (
        <div className='container'>
            <div className={`login ${loginAnim}`}>
      
                <section className='login-title'>
                    <h1>Welcome Back </h1>
                    <span>Please login to continue</span>
                </section>
                <section className='login-body'>
                    <h1>LOGIN</h1>                  
                    <input tabindex="1" name="UserName" type='text' placeholder='User Name'></input>
                    <input name="Password" type='password' placeholder='Passowrd'></input>
                </section>
                <section className='login-footer'>
                    <button type='button' className='login-btn' >LOGIN</button>
                    <button type='button' className='sign-up-btn' onClick={()=>{setLoginAnim('login-swipright');setSignupAnim('signup-swipright')}}>SIGN UP</button>
                    <span> <a href='www.google.com' target='_blank'>Forget Passowrd</a></span>
                </section>
            </div>
            <div className={`login ${signupAnim}`}>
                        <section className='login-title'>
                            <h1>SIGN UP </h1>
                            <span>Please signup to continue</span>
                        </section>
                <section className='login-body'>                 
                    <input tabindex="2" name="Email" type='email' placeholder='Email'></input>
                    <input tabindex="1" name="UserName" type='text' placeholder='User Name'></input>
                    <input name="Password" type='password' placeholder='Passowrd'></input>
                </section>
                <section className='login-footer'>
                    <button type='button' className='sign-up-btn' >SIGN UP</button>
                    <button type='button' className='login-btn'  onClick={()=>{setLoginAnim('login-swipleft');setSignupAnim('signup-swipleft')}}>LOGIN</button>
               </section>
            </div>
          
        </div>
  )
}
