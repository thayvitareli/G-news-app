import { SavedView } from '@/features/saved/view/saved.view';
import { useSavedModel } from '@/features/saved/view/saved.model';

export default function SavedScreen() {
  const { savedArticles, handleNavigateToArticle } = useSavedModel();

  return (
    <SavedView
      savedArticles={savedArticles}
      handleNavigateToArticle={handleNavigateToArticle}
    />
  );
}
