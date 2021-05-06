import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'


function Login() {
    const signIn = () => {
        //login
        auth.signInWithPopup(provider).catch(err => alert(err.message))
    }

    const redirectGithub = () => {
        window.location = "https://github.com/ovyas24/discord-with-react"
    } 
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://maxcdn.icons8.com/Share/icon/Logos/discord_logo1600.png" alt="Discord"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Discord_Color_Text_Logo.svg/1280px-Discord_Color_Text_Logo.svg.png" alt=""/>
            </div>
            {/* <div className="login__logo">
            </div> */}
            <Button onClick={signIn}>Sign In</Button>
            <br />
            <Button onClick={redirectGithub}>Check out Code</Button>
        </div>
    )
}

export default Login
