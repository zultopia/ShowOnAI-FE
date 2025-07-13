import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { authAPI } from '@/lib/api';
import { isValidUUID } from '@/lib/utils';
import { useLocalStorage } from './useLocalStorage';
import type { User, RegisterRequest, LoginRequest } from '@/types/auth';

interface ErrorResponse {
  response?: {
    data?: {
      code?: string;
      message?: string;
    };
  };
}

export function useAuth() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [storedUser, setStoredUser] = useLocalStorage<User | null>('auth_user', null);

  useEffect(() => {
    if (storedUser) {
      if (storedUser.id && isValidUUID(storedUser.id)) {
        setUser(storedUser);
      } else {
        setStoredUser(null);
      }
    }
    setLoading(false);
  }, [storedUser, setStoredUser]);

  useEffect(() => {
    const checkSession = async () => {
      if (!user) return;
      
      try {
        const response = await authAPI.getProfile();
        if (response.success && response.user && isValidUUID(response.user.id)) {
          setUser(response.user);
          setStoredUser(response.user);
          setError(null);
        } else {
          throw new Error('Invalid user data received');
        }
      } catch (err) {
        const error = err as ErrorResponse;
        const errorCode = error.response?.data?.code;
        
        if (errorCode === 'NO_REFRESH_TOKEN' || errorCode === 'INVALID_REFRESH_TOKEN') {
          setUser(null);
          setStoredUser(null);
          setError(null);
          router.push('/login');
        } else {
          setUser(null);
          setStoredUser(null);
          setError(null);
        }
      }
    };

    const interval = setInterval(checkSession, 10000);
    return () => clearInterval(interval);
  }, [user, setStoredUser, router]);

  const register = useCallback(async (data: RegisterRequest): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await authAPI.register(data);
      
      if (response.success && response.user && isValidUUID(response.user.id)) {
        setUser(response.user);
        setStoredUser(response.user);
        setError(null);
        return true;
      } else {
        setError(response.message || 'Registration failed - invalid response');
        return false;
      }
    } catch (err) {
      const error = err as ErrorResponse;
      const errorMessage = error.response?.data?.message || 'Registration failed';
      const errorCode = error.response?.data?.code;
      
      if (errorCode === 'registration_failed') {
        setError('Registration failed');
      } else {
        setError(errorMessage);
      }

      setUser(null);
      setStoredUser(null);
      return false;
    } finally {
      setLoading(false);
    }
  }, [setStoredUser]);

  const login = useCallback(async (data: LoginRequest): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await authAPI.login(data);
      
      if (response.success && response.user && isValidUUID(response.user.id)) {
        setUser(response.user);
        setStoredUser(response.user);
        setError(null);
        return true;
      } else {
        setError(response.message || 'Login failed - invalid response');
        return false;
      }
    } catch (err) {
      const error = err as ErrorResponse;
      const errorMessage = error.response?.data?.message || 'Login failed';
      const errorCode = error.response?.data?.code;
      if (errorCode === 'authentication_failed') {
        setError('Invalid email or password');
      } else {
        setError(errorMessage);
      }

      setUser(null);
      setStoredUser(null);
      return false;
    } finally {
      setLoading(false);
    }
  }, [setStoredUser]);

  const logout = useCallback(async (): Promise<void> => {
    setLoading(true);
    setError(null);
    
    try {
      await authAPI.logout();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setUser(null);
      setStoredUser(null);
      setError(null);
      setLoading(false);
    }
  }, [setStoredUser]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';
  const isApproved = user?.approved === true;

  const getUserId = useCallback((): string | null => {
    return user?.id && isValidUUID(user.id) ? user.id : null;
  }, [user]);

  return {
    user,
    loading,
    error,
    isAuthenticated,
    isAdmin,
    isApproved,
    register,
    login,
    logout,
    clearError,
    getUserId,
  };
}