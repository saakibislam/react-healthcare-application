import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const Register = () => {
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
            // history.push(redirect_uri);
        })

    }
    return (
        <div className="row my-3 px-4">
            <form onSubmit={createUser} className="col-md-6 col-lg-5 col-xl-4 rounded shadow-lg mx-auto p-5">
                <h1 className="text-success fw-bold">Sign Up</h1>
                <div>
                    <input onChange={handleNameChange} className="inputField" type="text" name="username" placeholder="Username" />
                    <input onChange={handleEmailChange} className="inputField" type="text" name="email" placeholder="Enter your email" />
                    <input onChange={handlePasswordChange} className="inputField" type="password" name="password" placeholder="Type password" />
                    <input className="inputField" type="password" name="password" placeholder="Confirm password" />
                    <textarea className="inputField" name="address" rows="3" placeholder="Address" />
                    <span>Already have an account? <NavLink to="/login" className="text-decoration-none">Login</NavLink> </span>
                </div>
                <button type="submit" className="btn btn-success px-5 fs-5 w-100 mt-3">Sign Up</button>
            </form>
        </div>
    );
};

export default Register;