import React from "react";
import './Login.css';
import { useState } from "react";
import { login, logout } from "../../redux/reducers/loginSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const navigateTo = useNavigate();
    const isLoggedIn = useSelector((state) => state.loginHandler.isLoggedIn)
    const dispatch = useDispatch()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function userNameHandler(e) {
        e.preventDefault()
        setUserName(e.target.value)
        console.log(userName);
    }
    function passwordHandler(e) {
        e.preventDefault()
        setPassword(e.target.value)
    }
    function loginHandler(e) {
        e.preventDefault()
        fetch('https://6315ba3c33e540a6d382dcca.mockapi.io/users').then((res) => res.json())
            .then((data) => {
                let user = data.find((user) => {
                    return user.userName == userName
                })
                if (user) {
                    if (user.password == password) {
                        dispatch(login(userName))
                        navigateTo('/cart')
                        setError("")
                    } else {
                        setError("please enter the correct password")
                    }
                } else {
                    setError("please enter the correct username")
                }
            })
    }
    return (
        <div className="Login">
            <div className="LoginWrapper">
                {
                    !isLoggedIn ?
                        <div className="LoginBox">
                            <div className="LoginForm">
                                <h1>Login</h1>
                                <form onSubmit={loginHandler}>
                                    <input type='text' placeholder="user name" onChange={(e) => {
                                        userNameHandler(e)
                                    }} />
                                    <input type='text' placeholder="password" onChange={(e) => {
                                        passwordHandler(e)
                                    }} />
                                    <input type='submit' value='Login' className='LoginBtn' />
                                </form>
                                <h4 className="error">{error}</h4>
                                <p>Not a member? <Link to='/signup' className="loginLink">Sign Up</Link></p>
                            </div>
                        </div> :
                        <div className="LoginBox LogoutBox">
                            <h4 className="error">
                                Already Logged In
                            </h4>
                            <button className="LogoutBtn" onClick={() => {
                                dispatch(logout())
                            }}>LogOut</button>
                        </div>
                }

            </div>
        </div>
    )
}

export default Login;
