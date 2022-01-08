import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import firebase from './config/firebase';
import { Navigate } from 'react-router';
import { AuthContext } from './AuthService';



const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const user = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log('logged In!')
            })
            .catch(err => {
                console.log(err);
            });
    };



    if (user) {
        return <Navigate to='/' />
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
            <Link to="/signup">Sign Up</Link>
        </>
    )
}

export default Login