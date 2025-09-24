export enum UserRole {
  ADMIN = 'ADMIN',
  AUTHOR = 'AUTHOR',
  READER = 'READER'
}

export enum PostStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  SCHEDULED = 'SCHEDULED'
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  bio?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featuredImage?: string;
  status: PostStatus;
  publishedAt?: Date;
  scheduledAt?: Date;
  authorId: string;
  author: User;
  categories: Category[];
  tags: Tag[];
  comments: Comment[];
  analytics: PostAnalytics;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  posts: Post[];
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  posts: Post[];
}

export interface Comment {
  id: string;
  content: string;
  authorName: string;
  authorEmail: string;
  postId: string;
  parentId?: string;
  replies: Comment[];
  isApproved: boolean;
  createdAt: Date;
}

export interface PostAnalytics {
  id: string;
  postId: string;
  views: number;
  likes: number;
  shares: number;
  readTime: number;
  updatedAt: Date;
}

export interface Media {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  alt?: string;
  uploadedBy: string;
  createdAt: Date;
}

export interface Newsletter {
  id: string;
  email: string;
  isActive: boolean;
  subscribedAt: Date;
}

export interface Theme {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
}