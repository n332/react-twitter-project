import { useState, useEffect } from 'react';
import axios from 'axios';

const useUserAuth = () => {
  const apiUrl = 'http://localhost:3000/api/users';
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load user data from localStorage on initialization
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const register = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${apiUrl}/register`, userData);
      setUser(response.data);
      // Save user data in localStorage
      localStorage.setItem('user', JSON.stringify(response.data.user));
    } catch (err) {
      console.error('Registration error:', err); // Debugging log
    } finally {
      setLoading(false);
    }
  };

  const login = async ({ email, password }) => {
    setLoading(true);
    setError(null);
    try {
      console.log(email, password);
      const response = await axios.post(`${apiUrl}/login`, { email, password });
      console.log(response.data);
      setUser(response.data);
      // Save user data in localStorage
      localStorage.setItem('user', JSON.stringify(response.data.user));
    } catch (err) {
      setError(err.response ? err.response.data : 'Error logging in user');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    // Remove user data from localStorage
    localStorage.removeItem('user');
  };

  return {
    user,
    loading,
    error,
    register,
    login,
    logout,
  };
};

export default useUserAuth;
