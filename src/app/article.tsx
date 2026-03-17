import { ArticleView } from '@/features/article/view/article.view';
import { useArticleModel } from '@/features/article/view/article.model';

export default function ArticleScreen() {
  const {
    article,
    relatedNews,
    isSaved,
    handleGoBack,
    handleNavigateToRelatedArticle,
    handleToggleSave,
  } = useArticleModel();

  return (
    <ArticleView
      article={article}
      relatedNews={relatedNews}
      isSaved={isSaved}
      handleGoBack={handleGoBack}
      handleNavigateToRelatedArticle={handleNavigateToRelatedArticle}
      handleToggleSave={handleToggleSave}
    />
  );
}
