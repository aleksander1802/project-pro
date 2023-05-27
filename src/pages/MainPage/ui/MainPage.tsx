import { useTranslation } from 'react-i18next';
import { BugButton } from 'widgets/PageError';

const MainPage = () => {
  const { t } = useTranslation();

  return <div>{t('main')}</div>;
};

export default MainPage;
