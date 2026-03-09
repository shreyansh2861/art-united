import { Button } from '@mui/material';
import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from './reducer';
import art_united from "C:/Users/shreyansh/Desktop/EDAI_TY - 1/art-united/src/art_united.png"
import { useStateValue } from './StateProvider';

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn =() => {
        auth.signInWithPopup(provider)
        .then(result => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })

            console.log(result)
        }).catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <div className='login__logo'>
            <img src='https://cdn.pixabay.com/photo/2016/05/26/14/39/parrot-1417286_1280.png' alt='Our Logo'/>
            <img src={art_united} alt='ART UNITED'/>
        </div>
        <Button type='submit' onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login