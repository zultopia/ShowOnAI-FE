import axios, { AxiosInstance, AxiosResponse } from 'axios';
import type { AuthResponse, ApiResponse, User } from '@/types/auth';

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:9000',
  timeout: 10000,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const isAuthEndpoint = originalRequest.url?.includes('/login') || originalRequest.url?.includes('/signup');
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isAuthEndpoint
    ) {
      originalRequest._retry = true;
      try {
        await api.post('/api/v1/auth/refresh');
        return api(originalRequest);
      } catch (refreshError) {
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
        return Promise.reject(refreshError);
      }
    }

    const errorCode = error.response?.data?.code;
    const errorMessage = error.response?.data?.message;

    switch (errorCode) {
      case 'user_not_found':
        error.message = 'User tidak ditemukan';
        break;
      case 'duplicate_email':
        error.message = 'Email sudah terdaftar';
        break;
      case 'invalid_user_id':
        error.message = 'ID user tidak valid';
        break;
      case 'rate_limit_exceeded':
        error.message = 'Terlalu banyak request, coba lagi nanti';
        break;
      default:
        error.message = errorMessage || 'Terjadi kesalahan';
    }

    return Promise.reject(error);
  }
);

export const authAPI = {
  register: async (data: { name: string; email: string; password: string }): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/api/v1/auth/register', data);
    return response.data;
  },

  login: async (data: { email: string; password: string }): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/api/v1/auth/login', data);
    return response.data;
  },

  refresh: async (): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/api/v1/auth/refresh');
    return response.data;
  },

  logout: async (): Promise<ApiResponse> => {
    const response = await api.post<ApiResponse>('/api/v1/auth/logout');
    return response.data;
  },

  getProfile: async (): Promise<AuthResponse> => {
    const response = await api.get<AuthResponse>('/api/v1/profile');
    return response.data;
  },

  healthCheck: async (): Promise<ApiResponse> => {
    const response = await api.get<ApiResponse>('/health');
    return response.data;
  },

  getUserById: async (id: string): Promise<ApiResponse<User>> => {
    const response = await api.get<ApiResponse<User>>(`/api/v1/users/${id}`);
    return response.data;
  },

  createUser: async (data: { name: string; email: string; password: string }): Promise<ApiResponse<User>> => {
    const response = await api.post<ApiResponse<User>>(`/api/v1/users`, data);
    return response.data;
  },

  updateUser: async (id: string, data: { name: string; email: string; password: string }): Promise<ApiResponse<User>> => {
    const response = await api.put<ApiResponse<User>>(`/api/v1/users/${id}`, data);
    return response.data;
  },

  deleteUser: async (id: string): Promise<ApiResponse> => {
    const response = await api.delete<ApiResponse>(`/api/v1/users/${id}`);
    return response.data;
  },
};

export default api;
