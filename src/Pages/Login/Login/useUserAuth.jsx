import { useState } from 'react';
import axios from 'axios';

const useUserAuth = () => {
  const apiUrl = 'http://localhost:3000/api/users';

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${apiUrl}`, userData);
      setUser(response.data);
    } catch (err) {
        console.error('Registration error:', err); // Debugging log
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${apiUrl}`, { email, password });
      setUser(response.data);
    } catch (err) {
      setError(err.response ? err.response.data : 'Error logging in user');
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    register,
    login,
  };
};

export default useUserAuth;
