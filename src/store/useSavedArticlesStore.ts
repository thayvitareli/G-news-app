import { create } from 'zustand';
import { Article } from '@/types';

interface SavedArticlesState {
  savedArticles: Article[];
  toggleSavedArticle: (article: Article) => void;
  isArticleSaved: (url: string) => boolean;
}

export const useSavedArticlesStore = create<SavedArticlesState>((set, get) => ({
  savedArticles: [],

  toggleSavedArticle: (article) => {
    const currentArticles = get().savedArticles;
    const isSaved = currentArticles.some((a) => a.url === article.url);

    if (isSaved) {
      set({
        savedArticles: currentArticles.filter((a) => a.url !== article.url),
      });
    } else {
      set({
        savedArticles: [...currentArticles, article],
      });
    }
  },

  isArticleSaved: (url: string) => {
    return get().savedArticles.some((a) => a.url === url);
  },
}));
