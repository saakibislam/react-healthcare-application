import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Context/useAuth';
import './Login.css';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const { googleLogin, setIsLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { registerUser, setUserName } = useAuth();
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleNameChange = e => {
        setName(e.target.value)
    }
    const createUser = e => {
        e.preventDefault();
        console.log(email, password);
        registerUser(email, password).then(result => {
            setUserName(name)
                .then(result => {
                    console.log("name updated", name)
                })
            history.push(redirect_url);
        })

    }

    const handleGoogleLogin = () => {
        setIsLoading(true);
        googleLogin()
            .then(result => {
                history.push(redirect_url);
            })
            .catch(error => {
                console.log(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    return (
        <>
            {
                !newUser ? <div className="w-25 mx-auto my-5 rounded shadow-lg p-5">
                    <h1 className="text-primary fw-normal">Please Login</h1>
                    <div className="my-4">
                        <button className="btn btn-lg btn-outline-dark px-4 mx-2">Facebook</button>
                        <button onClick={handleGoogleLogin} className="btn btn-lg btn-outline-dark px-4 mx-2">Google</button>
                    </div>
                    <div>
                        <input className="inputField" type="text" name="email" placeholder="Enter your email" autoComplete="off" />
                        <br />
                        <input className="inputField" type="password" name="password" placeholder="Type password" />
                        <p>New to Health Care? <span className="text-primary" onClick={() => { setNewUser(true) }}>Create Account</span></p>
                    </div>
                    <button className="btn btn-primary px-5 mt-5 fs-4">Login</button>
                </div>
                    : <form onSubmit={createUser} className="w-25 mx-auto my-5 rounded shadow-lg py-5 px-3">
                        <h1 className="text-success fw-bold">Sign Up</h1>
                        <div>
                            <input onChange={handleNameChange} className="inputField" type="text" name="username" placeholder="Username" />
                            <input onChange={handleEmailChange} className="inputField" type="text" name="email" placeholder="Enter your email" />
                            <input onChange={handlePasswordChange} className="inputField" type="password" name="password" placeholder="Type password" />
                            <input className="inputField" type="password" name="password" placeholder="Confirm password" />
                            <textarea className="inputField" name="address" rows="3" placeholder="Address" />
                            <p>Already have an account? <span className="text-primary" onClick={() => { setNewUser(false) }}>Login</span></p>
                        </div>
                        <button type="submit" className="btn btn-success px-5 fs-4 w-100 mt-3">Sign Up</button>
                    </form>
            }
        </>
    );
};

export default Login;