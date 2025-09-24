import axios from 'axios'
import Cookies from 'js-cookie'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      Cookies.remove('auth_token')
      window.location.href = '/auth/login'
    }
    return Promise.reject(error)
  }
)

// API endpoints
export const authAPI = {
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),
  register: (data: { email: string; password: string; name: string; bio?: string }) =>
    api.post('/auth/register', data),
  me: () => api.get('/auth/me'),
}

export const postsAPI = {
  getAll: (params?: { page?: number; limit?: number; category?: string; tag?: string; search?: string }) =>
    api.get('/posts', { params }),
  getBySlug: (slug: string) => api.get(`/posts/${slug}`),
  getFeatured: () => api.get('/posts/featured'),
  getTrending: () => api.get('/posts/trending'),
  create: (data: any) => api.post('/posts', data),
  update: (id: string, data: any) => api.put(`/posts/${id}`, data),
  delete: (id: string) => api.delete(`/posts/${id}`),
  incrementView: (id: string) => api.post(`/posts/${id}/view`),
}

export const categoriesAPI = {
  getAll: () => api.get('/categories'),
  getBySlug: (slug: string) => api.get(`/categories/${slug}`),
  create: (data: any) => api.post('/categories', data),
  update: (id: string, data: any) => api.put(`/categories/${id}`, data),
  delete: (id: string) => api.delete(`/categories/${id}`),
}

export const tagsAPI = {
  getAll: () => api.get('/tags'),
  getBySlug: (slug: string) => api.get(`/tags/${slug}`),
  create: (data: any) => api.post('/tags', data),
  update: (id: string, data: any) => api.put(`/tags/${id}`, data),
  delete: (id: string) => api.delete(`/tags/${id}`),
}

export const commentsAPI = {
  getByPost: (postId: string) => api.get(`/comments/post/${postId}`),
  create: (data: any) => api.post('/comments', data),
  update: (id: string, data: any) => api.put(`/comments/${id}`, data),
  delete: (id: string) => api.delete(`/comments/${id}`),
  approve: (id: string) => api.post(`/comments/${id}/approve`),
}

export const mediaAPI = {
  upload: (file: FormData) => api.post('/media/upload', file, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  getAll: () => api.get('/media'),
  delete: (id: string) => api.delete(`/media/${id}`),
}

export const newsletterAPI = {
  subscribe: (email: string) => api.post('/newsletter/subscribe', { email }),
  unsubscribe: (email: string) => api.post('/newsletter/unsubscribe', { email }),
}

export const usersAPI = {
  getProfile: (id: string) => api.get(`/users/${id}`),
  updateProfile: (data: any) => api.put('/users/profile', data),
  getAuthors: () => api.get('/users/authors'),
}