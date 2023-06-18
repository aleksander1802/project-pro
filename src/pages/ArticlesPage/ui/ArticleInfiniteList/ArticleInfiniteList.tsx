import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelector';
import { getArticles } from '../../model/slices/articlesPageSlice';
import cls from './ArticleInfiniteList.module.scss';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);

  if (error) {
    return <Text text={t('errorArticle')} />;
  }

  return (
    <div className={classNames(cls.ArticleInfiniteList, {}, [className])}>
      <ArticleList
        isLoading={isLoading}
        view={view}
        articles={articles}
        className={className}
      />
    </div>
  );
});

export default ArticleInfiniteList;
