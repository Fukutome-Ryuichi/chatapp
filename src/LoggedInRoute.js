import React, { useContext } from 'react'
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthService';



const LoggedInRoute = ({ component: Component }) => {
    const user = useContext(AuthContext);


    return (
        <>
            {user ?
                <Component />
                :
                <Navigate to={'/login'} />
            }
        </>

    )
}

export default LoggedInRoute