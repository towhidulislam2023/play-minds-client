import React, { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthProviderContext=createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser]=useState("")
    const [loading,setLoading]=useState(true)



    const signupuser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const logInuser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout = () => {
        signOut(auth)
    }
    const authInfo={
        user,
        signupuser,
        logInuser,
        logout

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe
        }
    }, [])
    return (
        <AuthProviderContext.Provider value={authInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export default AuthProvider;