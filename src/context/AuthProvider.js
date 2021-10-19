import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

// exporting creatieContext function as AuthContext 
export const AuthContext = createContext();

// taking all values that returned from useFirebse.js hook then making it global that every component can use those data of useFirebase.js hook ////////
const AuthProvider = ({ children }) => {
    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;