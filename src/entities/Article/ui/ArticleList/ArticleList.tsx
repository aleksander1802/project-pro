import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  virtualized?: boolean;
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
    virtualized = true,
  } = props;
  const { t } = useTranslation();

  const isList = view === ArticleView.LIST;

  const itemsPerRow = isList ? 1 : 3;
  const rowCount = isList
    ? articles.length
    : Math.ceil(articles.length / itemsPerRow);

  const rowReder = ({ index, isScrolling, key, style }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          article={articles[i]}
          view={view}
          className={cls.card}
          target={target}
          key={`str${i}`}
        />,
      );
    }

    return (
      <div key={key} style={style} className={cls.row}>
        {items}
      </div>
    );
  };

  if (!isLoading && !articles.length) {
    return <Text size={TextSize.L} text={t('articlesNotFound')} />;
  }

  return (
    <WindowScroller scrollElement={document.getElementById(PAGE_ID) as Element}>
      {({
        height,
        width,
        registerChild,
        onChildScroll,
        isScrolling,
        scrollTop,
      }) => (
        <div
          ref={registerChild}
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
          {virtualized ? (
            <List
              height={height ?? 700}
              rowCount={rowCount}
              rowHeight={isList ? 700 : 330}
              rowRenderer={rowReder}
              width={width ? width - 80 : 700}
              autoHeight
              onScroll={onChildScroll}
              isScrolling={isScrolling}
              scrollTop={scrollTop}
            />
          ) : (
            articles.map((item) => (
              <ArticleListItem
                article={item}
                view={view}
                target={target}
                className={cls.card}
                key={item.id}
              />
            ))
          )}

          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  );
});

export default ArticleList;
