import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.confrg';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // console.log(user)

    const CreatUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const observer = onAuthStateChanged(auth, (currentUser) => {
            // console.log('user state change', currentUser);
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            observer()
        }

    }, [])

    const Logout = ()=>{
        return signOut(auth)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUder = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    const authData = {
        user,
        setUser,
        CreatUser,
        Logout,
        login,
        loading,
        setLoading,
        updateUder,
        googleLogin,
    }

    return (
        <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;