
import React, { createContext, useState, useContext, useEffect } from 'react';
import { User, UserRole, AuthContextType } from '@/types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for development purposes
const MOCK_USERS = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@tecsup.edu.pe',
    password: 'admin123',
    role: 'admin' as UserRole,
  },
  {
    id: '2',
    name: 'Driver User',
    email: 'driver@tecsup.edu.pe',
    password: 'driver123',
    role: 'driver' as UserRole,
  },
  {
    id: '3',
    name: 'Passenger User',
    email: 'passenger@tecsup.edu.pe',
    password: 'passenger123',
    role: 'passenger' as UserRole,
  },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Check for saved user in localStorage on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('penguinsOnRoadUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Find user with matching credentials
      const foundUser = MOCK_USERS.find(
        (u) => u.email === email && u.password === password
      );
      
      if (foundUser) {
        const { password, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword as User);
        localStorage.setItem('penguinsOnRoadUser', JSON.stringify(userWithoutPassword));
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during login');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      localStorage.removeItem('penguinsOnRoadUser');
      setUser(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during logout');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string, role: UserRole) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user already exists
      if (MOCK_USERS.some((u) => u.email === email)) {
        throw new Error('User with this email already exists');
      }
      
      // In a real app, this would send data to a backend service
      // For now, we'll just simulate a successful registration
      const newUser = {
        id: `${MOCK_USERS.length + 1}`,
        name,
        email,
        role,
      };
      
      setUser(newUser);
      localStorage.setItem('penguinsOnRoadUser', JSON.stringify(newUser));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during registration');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
