import React, {useState} from 'react';
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'
const Register = (props) => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const submitHandler = (e) => {
        console.log('Submitted');
        e.preventDefault()
        const newUser = {firstName, lastName, email, password, confirmPassword}
        axios.post('http://localhost:8000/api/registerUser', newUser, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/home')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button>Register</button>
            </form>
            <Link to={'/login'}>Dont have an account? Sign up here</Link>
        </div>
)}

export default Register;