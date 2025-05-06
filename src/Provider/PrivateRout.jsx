import React, { useContext } from 'react';
// import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';
import { AuthContext } from './AuthProvider';

const PrivateRout = ({ children }) => {

    const { user,loading } = useContext(AuthContext)
    const location = useLocation()


    // console.log(user, 'user in private route', location);


    // console.log(user);

    // return children

    if(loading){
        return <Loading></Loading>
    }

    if (user && user?.email) {
        return children
    } else {
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }

};

export default PrivateRout;