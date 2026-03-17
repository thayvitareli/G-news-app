import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo } from 'react';
import { Article } from '@/types';
import useGetNews from '@/hooks/use-get-news';
import { useSavedArticlesStore } from '@/store/useSavedArticlesStore';

export const useArticleModel = () => {
  const router = useRouter();
  const { article: articleParam } = useLocalSearchParams();

  const toggleSavedArticle = useSavedArticlesStore((state) => state.toggleSavedArticle);

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

  const savedArticles = useSavedArticlesStore((state) => state.savedArticles);

  const isSaved = article ? savedArticles.some((a) => a.url === article.url) : false;

  const handleToggleSave = () => {
    if (article) {
      toggleSavedArticle(article);
    }
  };

  return {
    article,
    relatedNews: relatedNews?.articles || [],
    isSaved,
    handleGoBack,
    handleNavigateToRelatedArticle,
    handleToggleSave,
  };
};
