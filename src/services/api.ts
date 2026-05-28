// ============================================================
// blog-client-web/src/services/api.ts
// Axios instance — base configuration
// All API service files import from here
// ============================================================

import axios from 'axios';
import { config } from '../config/env';

export const api = axios.create({
  baseURL: config.apiBaseUrl,
  timeout: 10_000,
  headers: { 'Content-Type': 'application/json' },
});

// ── Request interceptor — attach auth token ────────────────────
api.interceptors.request.use((req) => {
  const token = localStorage.getItem('auth-token');
  if (token && req.headers) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// ── Response interceptor — handle global errors ───────────────
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      // TODO: trigger auth refresh or logout
    }
    return Promise.reject(err);
  }
);

export default api;
