import { HomeView } from '@/features/home/view/home.view';
import { useHomeModel } from '@/features/home/view/home.model';

export default function HomeScreen() {
  const { newsData, isLoading, headlineNewsData, isLoadingBreakingNews, handleNavigateToArticle, handleNavigateToSearch } = useHomeModel();

  return <HomeView
    onNavigateToArticle={handleNavigateToArticle}
    onNavigateToSearch={handleNavigateToSearch}
    breakingNews={headlineNewsData?.articles || []}
    lastNews={newsData?.articles || []}
    isLoading={isLoading}
    isLoadingBreakingNews={isLoadingBreakingNews}
  />;
}
