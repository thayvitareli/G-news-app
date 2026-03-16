import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo } from 'react';
import { Article } from '@/types';
import useGetNews from '@/hooks/use-get-news';

export const useArticleModel = () => {
  const router = useRouter();
  const { article: articleParam } = useLocalSearchParams();

  // Use existing news fetchhook to mock related articles
  const { data: relatedNews } = useGetNews();

  const article: Article | null = useMemo(() => {
    if (typeof articleParam === 'string') {
      try {
        return JSON.parse(articleParam);
      } catch (e) {
        console.error('Failed to parse article param', e);
        return null;
      }
    }
    return null;
  }, [articleParam]);

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/');
    }
  };

  const handleNavigateToRelatedArticle = (relatedArticle: Article) => {
    router.setParams({ article: JSON.stringify(relatedArticle) });
  };

  return {
    article,
    relatedNews: relatedNews?.articles || [],
    handleGoBack,
    handleNavigateToRelatedArticle,
  };
};
