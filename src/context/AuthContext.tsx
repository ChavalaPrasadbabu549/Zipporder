import React, { createContext, useState, useContext, ReactNode } from 'react';

import { User, AuthContextType, AuthProviderProps } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = async (email: string, password: string) => {
        try {
            // TODO: Implement actual login API call
            console.log('Login attempt:', email);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Mock user data
            const mockUser: User = {
                id: '1',
                name: 'John Doe',
                email: email,
            };

            setUser(mockUser);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const register = async (name: string, email: string, password: string) => {
        try {
            // TODO: Implement actual registration API call
            console.log('Register attempt:', { name, email });

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Mock user data
            const mockUser: User = {
                id: '1',
                name: name,
                email: email,
            };

            setUser(mockUser);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                login,
                register,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
