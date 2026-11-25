import type { Category, Post } from "@/types";

const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://vexirahub-api.onrender.com/api"
).replace(/\/+$/, "");

export interface PaginatedResult<T> {
  items: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
  };
}

interface ApiEnvelope<T> {
  success: boolean;
  data: T;
  message?: string;
}

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    cache: "no-store",
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Public API request failed (${response.status}): ${path}`);
  }

  const payload = (await response.json()) as ApiEnvelope<T>;
  if (payload.success !== true) {
    throw new Error(payload.message || "The public API returned an unsuccessful response.");
  }
  return payload.data;
}

export async function getFeaturedPosts(): Promise<Post[]> {
  return request<Post[]>("/public/posts/featured");
}

export async function getLatestPosts(page = 1, limit = 12): Promise<PaginatedResult<Post>> {
  return request<PaginatedResult<Post>>(`/public/posts/latest?page=${page}&limit=${limit}`);
}

export async function getTrendingPosts(page = 1, limit = 12): Promise<PaginatedResult<Post>> {
  return request<PaginatedResult<Post>>(`/public/posts/trending?page=${page}&limit=${limit}`);
}

export async function getThoughtPosts(page = 1, limit = 12): Promise<PaginatedResult<Post>> {
  return request<PaginatedResult<Post>>(`/public/posts/thoughts?page=${page}&limit=${limit}`);
}

export async function getPublicPost(slug: string): Promise<Post | null> {
  try {
    return await request<Post>(`/public/posts/${encodeURIComponent(slug)}`);
  } catch (error) {
    if (error instanceof Error && error.message.includes("(404)")) return null;
    throw error;
  }
}

export async function getPublicCategories(): Promise<Category[]> {
  return request<Category[]>("/public/categories/active");
}

export async function getCategoryPosts(slug: string, page = 1, limit = 12): Promise<{ category: Category } & PaginatedResult<Post>> {
  return request<{ category: Category } & PaginatedResult<Post>>(
    `/public/categories/${encodeURIComponent(slug)}/posts?page=${page}&limit=${limit}`,
  );
}

export async function searchPublicPosts(query: string, page = 1, limit = 12): Promise<PaginatedResult<Post>> {
  return request<PaginatedResult<Post>>(
    `/public/posts/search?q=${encodeURIComponent(query)}&page=${page}&limit=${limit}`,
  );
export async function subscribeToNewsletter(email: string): Promise<{ alreadySubscribed?: boolean }> {
  const response = await fetch(API_BASE_URL + "/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ email }),
  });
  const payload = (await response.json()) as ApiEnvelope<{ alreadySubscribed?: boolean }>;
  if (!response.ok || payload.success !== true) {
    throw new Error(payload.message || "Unable to complete your subscription.");
  }
  return payload.data;
}
