"use client"
import React, { createContext, useContext, useEffect } from 'react';
import { useRouter } from "next/navigation";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const router = useRouter()

    const token = localStorage.getItem('token');
    useEffect(() => {

        if (!token) {
            router.push("/login")
        }
    }, [token])
    return (
        <AuthContext.Provider value={{}} >
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    return useContext(AuthContext)
}

