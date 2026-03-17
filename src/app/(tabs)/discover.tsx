import { useDiscoverModel } from '@/features/discover/view/discover.model';
import { DiscoverView } from '@/features/discover/view/discover.view';
import { router } from 'expo-router';
import { Article } from '@/types';

export default function DiscoverScreen() {
  const model = useDiscoverModel();

  const handleNavigateToArticle = (article: Article) => {
    router.push({
      pathname: '/article',
      params: { article: JSON.stringify(article) },
    });
  };

  return <DiscoverView model={model} onNavigateToArticle={handleNavigateToArticle} />;
}
