import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'

function Login() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:3001/api/login', { email, password })
        if (res.data.success) {
            toast.success(res.data.message)
            navigate('/home');
        } else {
            toast.error(res.data.message)
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="email"
                            placeholder="Enter Email"
                            value={email}
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input type="password"
                            placeholder="Enter Password"
                            value={password}
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)} />

                    </div>

                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>

                </form>
                <p>Don't have an Account</p>
                <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Sign up
                </Link>

            </div>
        </div>
    )

}

export default Login;
