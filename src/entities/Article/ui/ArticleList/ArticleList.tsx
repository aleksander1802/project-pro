import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { PAGE_ID } from '@/widgets/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/articleConsts';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.TILE ? 9 : 3)
    .fill(0)
    .map((item, idx) => (
      <ArticleListItemSkeleton className={cls.card} key={idx} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.TILE,
    target,
  } = props;
  const { t } = useTranslation();

  if (!isLoading && !articles.length) {
    return <Text size={TextSize.L} text={t('articlesNotFound')} />;
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.map((item) => (
        <ArticleListItem
          article={item}
          view={view}
          target={target}
          className={cls.card}
          key={item.id}
        />
      ))}

      {isLoading && getSkeletons(view)}
    </div>
  );
});

export default ArticleList;
