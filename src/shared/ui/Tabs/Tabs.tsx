import { classNames } from 'shared/lib/classNames/classNames';

import { ReactNode, memo, useCallback } from 'react';
import cls from './Tabs.module.scss';
import Card, { CardTheme } from '../Card/Card';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, value, onTabClick } = props;

  const clickHandle = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((t) => (
        <Card
          theme={t.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          className={cls.tab}
          key={t.value}
          onClick={clickHandle(t)}
        >
          {t.content}
        </Card>
      ))}
    </div>
  );
});

export default Tabs;
