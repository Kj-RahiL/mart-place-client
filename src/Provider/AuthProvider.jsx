import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

const auth = getAuth(app)
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    // createUser
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // sign out user
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    // observe
   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setLoading(false)
        setUser(currentUser);
        console.log('current user', currentUser)
    })
    return ()=>{
        unSubscribe()
    }
   },[])

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleLogin,
        logOut

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;