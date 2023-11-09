import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

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
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // observe
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email
            const loggedUser = { email: userEmail }

            setLoading(false)
            setUser(currentUser);
            console.log('current user', currentUser)

            // get access token
            if (currentUser) {

                axios.post('https://mart-place-server.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data)
                    })
            }
            else {
                axios.post('https://mart-place-server.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token remove', res.data)
                    })
            }
        })
        return () => {
            unSubscribe()
        }
    }, [])

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