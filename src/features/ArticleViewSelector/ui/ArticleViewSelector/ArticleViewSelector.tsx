import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TileIcon from '@/shared/assets/icons/tile-24-24.svg';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { Icon } from '@/shared/ui/deprecated/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.TILE,
    icon: TileIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((v) => (
        <React.Fragment key={v.view}>
          <Button theme={ButtonTheme.CLEAR} onClick={onClick(v.view)}>
            <Icon
              width={24}
              height={24}
              Svg={v.icon}
              className={classNames('', { [cls.selected]: v.view !== view })}
            />
          </Button>
        </React.Fragment>
      ))}
    </div>
  );
});
