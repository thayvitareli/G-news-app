import { useSavedArticlesStore } from '@/store/useSavedArticlesStore';
import { useRouter } from 'expo-router';
import { Article } from '@/types';

export const useSavedModel = () => {
  const savedArticles = useSavedArticlesStore((state) => state.savedArticles);
  const router = useRouter();

  const handleNavigateToArticle = (article: Article) => {
    router.push({
      pathname: '/article',
      params: { article: JSON.stringify(article) },
    });
  };

  return {
    savedArticles,
    handleNavigateToArticle,
  };
};
