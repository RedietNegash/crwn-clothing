import React from 'react'
import Sign_in from '../../sign-in/sign-in.component';
import Signup from '../sign-up/Sign-up.components';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../sign-in/sign-in.component';
const SignInAndSignUpPage=()=> (
 
    <div className='sign-in-and-sign-up'>
      
      <SignIn/>
      <Signup/>
    </div>
  
)

export default SignInAndSignUpPage;
