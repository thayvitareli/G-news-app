import useGetNews from '@/hooks/use-get-news';
import useGetTopHeadlinesNews from '@/hooks/use-get-top-headlines';
import { Article } from '@/types';
import { useRouter } from 'expo-router';

export const useHomeModel = () => {
  const { data: newsData, isLoading, error } = useGetNews();
  const {
    data: headlineNewsData,
    isLoading: isLoadingBreakingNews,
    error: errorBreakingNews,
  } = useGetTopHeadlinesNews();
  const router = useRouter();

  const handleNavigateToArticle = (article: Article) => {
    router.push({
      pathname: '/article',
      params: { article: JSON.stringify(article) },
    });
  };

  const handleNavigateToSearch = () => {
    router.push('/search');
  };

  return {
    newsData,
    isLoading,
    error,
    headlineNewsData,
    isLoadingBreakingNews,
    errorBreakingNews,
    router,
    handleNavigateToArticle,
    handleNavigateToSearch,
  };
};
