import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserData = (user) => {
        setLoading(false);
        return updateProfile(auth.currentUser, user)
    }
    const googleLogin = () => {
        setLoading(false);
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("onAuthStateChange: ", currentUser)
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        loading,
        signup,
        updateUserData,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;