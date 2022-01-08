import React from 'react'

import Login from './Login';
import Room from './Room'
import SignUp from './SignUp';

import { AuthProvider } from './AuthService';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import LoggedInRoute from './LoggedInRoute'

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<LoggedInRoute component={Room} />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
            </Router >
        </AuthProvider>
    );
};

export default App