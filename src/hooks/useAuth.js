import React, {useState, useEffect, useContext, createContext} from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import app from '../components/utils/firebase.config';

const auth = getAuth(app);
const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({children})=>{

    const [user, setUser] = useState(null);
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const signup = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email,password).then((result)=>{
            setUser(result.user);
            return true;
        })
    }

    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password).then((result)=>{
            setUser(result.user);
            return true;
        });
    }

    const logout = ()=>{
        return signOut(auth).then(()=>{
            setUser(null);
        });
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            setIsAuthenticating(false);
        })

        return ()=> unsubscribe();
    },[]);

    const values = {
        user,
        isAuthenticating,
        signup,
        login,
        logout
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}



