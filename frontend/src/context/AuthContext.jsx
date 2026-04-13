import React, { createContext, useContext, useState, useEffect } from 'react';
import { checkAuth, login as apiLogin, logout as apiLogout } from '../services/api';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const data = await checkAuth();
        setIsAdmin(data.isAdmin);
      } catch (error) {
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };
    verifyAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const data = await apiLogin(credentials);
      if (data.success) {
        setIsAdmin(true);
        toast.success(data.message);
        return true;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
      return false;
    }
  };

  const logout = async () => {
    try {
      await apiLogout();
      setIsAdmin(false);
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  return (
    <AuthContext.Provider value={{ isAdmin, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
