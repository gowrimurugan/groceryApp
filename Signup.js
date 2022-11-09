import React from "react";
import './Login.css';
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
    const navigateTo = useNavigate()
    const isLoggedIn = useSelector((state) => state.loginHandler.isLoggedIn)

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    function userNameHandler(e) {
        e.preventDefault()
        setUserName(e.target.value)
    }
    function passwordHandler(e) {
        e.preventDefault()
        setPassword(e.target.value)
    }
    function confirmPasswordHandler(e) {
        e.preventDefault()
        setConfirmPassword(e.target.value)
    }
    function signUpHandler(e) {
        e.preventDefault()
        let newUser = {
            userName: userName,
            password: password
        }
        if (userName.length > 6) {
            if (password.length > 3) {
                if (password === confirmPassword) {
                    fetch('https://6315ba3c33e540a6d382dcca.mockapi.io/users', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(newUser)
                    }).then(() => {
                        setError("")
                        navigateTo('/login')
                    })
                } else {
                    setError("password Did Not Match")
                }
            } else {
                setError("Please enter atleast 3 characters")
            }
        } else {
            setError("please enter atleast 6 characters")
        }
    }
    return (
        <div className="Login">
            <div className="LoginWrapper">
                {
                    <div className="LoginBox">
                        <div className="LoginForm">
                            <h1>SIGN UP</h1>
                            <form onSubmit={signUpHandler}>
                                <input type='text' placeholder='user name' onChange={(e) => {
                                    userNameHandler(e)
                                }} />
                                <input type='text' placeholder='Password' onChange={(e) => {
                                    passwordHandler(e)
                                }} />
                                <input type='text' placeholder='Confirm Password' onChange={(e) => {
                                    confirmPasswordHandler(e)
                                }} />
                                <input type='submit' value='Sign up' className='LoginBtn' />
                            </form>
                            <h4 className="error">{error}</h4>
                            <p>Already a member? <Link to='/login' className="loginLink">Login</Link></p>
                        </div>
                    </div>
                }
            </div>

        </div>
    )

}

export default SignUp;