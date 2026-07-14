// @ts-nocheck
const rawUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';
const API_BASE_URL = rawUrl.endsWith('/api') ? rawUrl : `${rawUrl}/api`;

const getHeaders = (isFormData = false) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('mg_admin_token') : null;
  const headers = new Headers();
  
  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }
  
  if (!isFormData) {
    headers.append('Content-Type', 'application/json');
  }
  
  return headers;
};

const handleResponse = async (response) => {
  if (response.status === 401) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('mg_admin_token');
      localStorage.removeItem('mg_admin_user');
      // Use window.location instead of router to force a full redirect if unauthorized
      if (!window.location.pathname.includes('/admin/login')) {
        window.location.href = '/admin/login';
      }
    }
  }

  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'An error occurred');
    }
    return data;
  }
  
  if (contentType && contentType.includes('text/csv')) {
    return await response.blob();
  }

  if (!response.ok) {
    throw new Error('An error occurred');
  }

  return response.text();
};

export const api = {
  auth: {
    login: async (credentials) => {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(credentials),
      });
      return handleResponse(response);
    },
    me: async () => {
      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: getHeaders(),
      });
      return handleResponse(response);
    },
    changePassword: async (data) => {
      const response = await fetch(`${API_BASE_URL}/auth/change-password`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
    logout: async () => {
      const response = await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'POST',
        headers: getHeaders(),
      });
      return handleResponse(response);
    }
  },
  
  packages: {
    getPublic: async (params = {}) => {
      const query = new URLSearchParams(params).toString();
      const response = await fetch(`${API_BASE_URL}/packages?${query}`);
      return handleResponse(response);
    },
    getFeatured: async () => {
      const response = await fetch(`${API_BASE_URL}/packages/featured`);
      return handleResponse(response);
    },
    getBySlug: async (slug) => {
      const response = await fetch(`${API_BASE_URL}/packages/${slug}`);
      return handleResponse(response);
    },
    incrementView: async (id) => {
      // Fire and forget
      fetch(`${API_BASE_URL}/packages/${id}/view`, { method: 'PATCH' });
    },
    getAdminAll: async (params = {}) => {
      const query = new URLSearchParams(params).toString();
      const response = await fetch(`${API_BASE_URL}/packages/admin/all?${query}`, {
        headers: getHeaders(),
      });
      return handleResponse(response);
    },
    getAdminById: async (id) => {
      const response = await fetch(`${API_BASE_URL}/packages/${id}/admin`, {
        headers: getHeaders(),
      });
      return handleResponse(response);
    },
    create: async (data) => {
      const response = await fetch(`${API_BASE_URL}/packages`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
    update: async (id, data) => {
      const response = await fetch(`${API_BASE_URL}/packages/${id}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
    toggleActive: async (id) => {
      const response = await fetch(`${API_BASE_URL}/packages/${id}/toggle`, {
        method: 'PATCH',
        headers: getHeaders(),
      });
      return handleResponse(response);
    },
    toggleFeature: async (id) => {
      const response = await fetch(`${API_BASE_URL}/packages/${id}/feature`, {
        method: 'PATCH',
        headers: getHeaders(),
      });
      return handleResponse(response);
    },
    delete: async (id) => {
      const response = await fetch(`${API_BASE_URL}/packages/${id}`, {
        method: 'DELETE',
        headers: getHeaders(),
      });
      return handleResponse(response);
    }
  },

  bookings: {
    create: async (data) => {
      const response = await fetch(`${API_BASE_URL}/bookings`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
    getAll: async (params = {}) => {
      const query = new URLSearchParams(params).toString();
      const response = await fetch(`${API_BASE_URL}/bookings?${query}`, {
        headers: getHeaders(),
      });
      return handleResponse(response);
    },
    getById: async (id) => {
      const response = await fetch(`${API_BASE_URL}/bookings/${id}`, {
        headers: getHeaders(),
      });
      return handleResponse(response);
    },
    updateStatus: async (id, status) => {
      const response = await fetch(`${API_BASE_URL}/bookings/${id}/status`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify({ status }),
      });
      return handleResponse(response);
    },
    updateNotes: async (id, adminNotes) => {
      const response = await fetch(`${API_BASE_URL}/bookings/${id}/notes`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify({ adminNotes }),
      });
      return handleResponse(response);
    },
    sendEmail: async (id, data) => {
      const response = await fetch(`${API_BASE_URL}/bookings/${id}/email`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
    delete: async (id) => {
      const response = await fetch(`${API_BASE_URL}/bookings/${id}`, {
        method: 'DELETE',
        headers: getHeaders(),
      });
      return handleResponse(response);
    },
    exportCSV: async (params = {}) => {
      const query = new URLSearchParams(params).toString();
      const response = await fetch(`${API_BASE_URL}/bookings/export?${query}`, {
        headers: getHeaders(),
      });
      return handleResponse(response);
    }
  },

  enquiries: {
    create: async (data) => {
      const response = await fetch(`${API_BASE_URL}/enquiries`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
    getAll: async (params = {}) => {
      const query = new URLSearchParams(params).toString();
      const response = await fetch(`${API_BASE_URL}/enquiries?${query}`, {
        headers: getHeaders(),
      });
      return handleResponse(response);
    },
    getById: async (id) => {
      const response = await fetch(`${API_BASE_URL}/enquiries/${id}`, {
        headers: getHeaders(),
      });
      return handleResponse(response);
    },
    toggleRead: async (id) => {
      const response = await fetch(`${API_BASE_URL}/enquiries/${id}/read`, {
        method: 'PATCH',
        headers: getHeaders(),
      });
      return handleResponse(response);
    },
    delete: async (id) => {
      const response = await fetch(`${API_BASE_URL}/enquiries/${id}`, {
        method: 'DELETE',
        headers: getHeaders(),
      });
      return handleResponse(response);
    }
  },

  testimonials: {
    getPublic: async () => {
      const response = await fetch(`${API_BASE_URL}/testimonials`);
      return handleResponse(response);
    },
    getFeatured: async () => {
      const response = await fetch(`${API_BASE_URL}/testimonials/featured`);
      return handleResponse(response);
    },
    getAdmin: async (params = {}) => {
      const query = new URLSearchParams(params).toString();
      const response = await fetch(`${API_BASE_URL}/testimonials/admin?${query}`, {
        headers: getHeaders(),
      });
      return handleResponse(response);
    },
    create: async (data) => {
      const response = await fetch(`${API_BASE_URL}/testimonials`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
    update: async (id, data) => {
      const response = await fetch(`${API_BASE_URL}/testimonials/${id}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
    toggleApprove: async (id) => {
      const response = await fetch(`${API_BASE_URL}/testimonials/${id}/approve`, {
        method: 'PATCH',
        headers: getHeaders(),
      });
      return handleResponse(response);
    },
    toggleFeature: async (id) => {
      const response = await fetch(`${API_BASE_URL}/testimonials/${id}/feature`, {
        method: 'PATCH',
        headers: getHeaders(),
      });
      return handleResponse(response);
    },
    delete: async (id) => {
      const response = await fetch(`${API_BASE_URL}/testimonials/${id}`, {
        method: 'DELETE',
        headers: getHeaders(),
      });
      return handleResponse(response);
    }
  },

  blog: {
    getPublic: async (params = {}) => {
      const query = new URLSearchParams(params).toString();
      const response = await fetch(`${API_BASE_URL}/blog?${query}`);
      return handleResponse(response);
    },
    getBySlug: async (slug) => {
      const response = await fetch(`${API_BASE_URL}/blog/slug/${slug}`);
      return handleResponse(response);
    },
    getAdminAll: async (params = {}) => {
      const query = new URLSearchParams(params).toString();
      const response = await fetch(`${API_BASE_URL}/blog/admin/all?${query}`, {
        headers: getHeaders(),
      });
      return handleResponse(response);
    },
    getAdminById: async (id) => {
      const response = await fetch(`${API_BASE_URL}/blog/admin/${id}`, {
        headers: getHeaders(),
      });
      return handleResponse(response);
    },
    create: async (data) => {
      const response = await fetch(`${API_BASE_URL}/blog`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
    update: async (id, data) => {
      const response = await fetch(`${API_BASE_URL}/blog/${id}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
    togglePublish: async (id) => {
      const response = await fetch(`${API_BASE_URL}/blog/${id}/publish`, {
        method: 'PATCH',
        headers: getHeaders(),
      });
      return handleResponse(response);
    },
    delete: async (id) => {
      const response = await fetch(`${API_BASE_URL}/blog/${id}`, {
        method: 'DELETE',
        headers: getHeaders(),
      });
      return handleResponse(response);
    }
  },

  users: {
    getAll: async () => {
      const response = await fetch(`${API_BASE_URL}/users`, {
        headers: getHeaders(),
      });
      return handleResponse(response);
    },
    create: async (data) => {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
    update: async (id, data) => {
      const response = await fetch(`${API_BASE_URL}/users/${id}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
    toggleActive: async (id) => {
      const response = await fetch(`${API_BASE_URL}/users/${id}/toggle`, {
        method: 'PATCH',
        headers: getHeaders(),
      });
      return handleResponse(response);
    },
    delete: async (id) => {
      const response = await fetch(`${API_BASE_URL}/users/${id}`, {
        method: 'DELETE',
        headers: getHeaders(),
      });
      return handleResponse(response);
    }
  },

  dashboard: {
    getStats: async () => {
      const response = await fetch(`${API_BASE_URL}/dashboard/stats`, {
        headers: getHeaders(),
      });
      return handleResponse(response);
    },
    getRecent: async () => {
      const response = await fetch(`${API_BASE_URL}/dashboard/recent`, {
        headers: getHeaders(),
      });
      return handleResponse(response);
    }
  },

  upload: {
    image: async (file) => {
      const formData = new FormData();
      formData.append('image', file);
      const response = await fetch(`${API_BASE_URL}/upload/image`, {
        method: 'POST',
        headers: getHeaders(true),
        body: formData,
      });
      return handleResponse(response);
    },
    gallery: async (files) => {
      const formData = new FormData();
      Array.from(files).forEach(file => {
        formData.append('images', file);
      });
      const response = await fetch(`${API_BASE_URL}/upload/gallery`, {
        method: 'POST',
        headers: getHeaders(true),
        body: formData,
      });
      return handleResponse(response);
    },
    deleteImage: async (urlOrFilename) => {
      const response = await fetch(`${API_BASE_URL}/upload`, {
        method: 'DELETE',
        headers: getHeaders(),
        body: JSON.stringify({ url: urlOrFilename }),
      });
      return handleResponse(response);
    }
  }
};
