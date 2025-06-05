
import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        
        const storedToken = localStorage.getItem('token');
        const storedUserName = localStorage.getItem('userName'); 

        if (storedToken && storedUserName) { 
            setToken(storedToken);
            setUserName(storedUserName);
            setIsLoggedIn(true);
        } else if (storedToken) { 
            setToken(storedToken);
            setIsLoggedIn(true);
            
            setUserName('Usuário');
        }
    }, []);

   
    const login = (newToken, userDisplayName) => {
        localStorage.setItem('token', newToken);
        localStorage.setItem('userName', userDisplayName); 
        setToken(newToken);
        setUserName(userDisplayName);
        setIsLoggedIn(true);
    };

    
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName'); 
        localStorage.removeItem('rememberedEmail'); 
        setToken(null);
        setUserName(null); 
        setIsLoggedIn(false);
    };

    
    return (
        <AuthContext.Provider value={{ isLoggedIn, token, userName, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    return useContext(AuthContext);
};
