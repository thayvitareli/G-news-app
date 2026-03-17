import { useState, useCallback, useEffect } from 'react';
import { Article } from '@/types';
import { getDiscoverNews } from '@/service/news';

export const CATEGORIES = [
  { id: 'general', label: 'General' },
  { id: 'technology', label: 'Technology' },
  { id: 'business', label: 'Business' },
  { id: 'sports', label: 'Sports' },
  { id: 'science', label: 'Science' },
  { id: 'health', label: 'Health' },
  { id: 'entertainment', label: 'Entertainment' },
];

export const useDiscoverModel = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0].id);
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Debounce search query manually if useDebounce hook doesn't exist
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const fetchArticles = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getDiscoverNews(selectedCategory, debouncedQuery);
      if (response && response.articles) {
        setArticles(response.articles);
      }
    } catch (error) {
      console.error('Failed to fetch discover news:', error);
    } finally {
      setIsLoading(false);
    }
  }, [selectedCategory, debouncedQuery]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    articles,
    isLoading,
    categories: CATEGORIES,
  };
};
