import { ArticleView } from '@/features/article/view/article.view';
import { useArticleModel } from '@/features/article/view/article.model';

export default function ArticleScreen() {
  const { article, relatedNews, handleGoBack, handleNavigateToRelatedArticle } = useArticleModel();

  return (
    <ArticleView
      article={article}
      relatedNews={relatedNews}
      handleGoBack={handleGoBack}
      handleNavigateToRelatedArticle={handleNavigateToRelatedArticle}
    />
  );
}
