export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

export const calculateReadTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

export const generateExcerpt = (content: string, maxLength: number = 160): string => {
  const plainText = content.replace(/<[^>]*>/g, '').replace(/[#*`]/g, '');
  return truncateText(plainText, maxLength);
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const generateMetaTags = (post: any) => {
  return {
    title: post.title,
    description: post.excerpt || generateExcerpt(post.content),
    openGraph: {
      title: post.title,
      description: post.excerpt || generateExcerpt(post.content),
      images: post.featuredImage ? [{ url: post.featuredImage }] : [],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || generateExcerpt(post.content),
      images: post.featuredImage ? [post.featuredImage] : []
    }
  };
};