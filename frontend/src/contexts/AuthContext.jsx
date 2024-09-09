import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [access, setAccess] = useState(localStorage.getItem('access') || '');

    useEffect(() => {
        const storedAccess = localStorage.getItem('access');
        setAccess(storedAccess);
    }, []);

    const login = (token) => {
        localStorage.setItem('access', token);
        setAccess(token); // Update the context
    };

    const logout = () => {
        localStorage.removeItem('access');
        setAccess(''); // Clear the access token
    };

    return (
        <AuthContext.Provider value={{ access, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};