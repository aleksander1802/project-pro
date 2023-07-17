import { useTranslation } from 'react-i18next';
import Page from '@/widgets/Page/Page';
import { RatingCard } from '@/entities/Rating/index';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('Главная страница')}
      <RatingCard
        title={t('articleFeedback')}
        feedbackTitle={t('articleFeedbackTitle')}
        hasFeedback
      />
    </Page>
  );
};

export default MainPage;
