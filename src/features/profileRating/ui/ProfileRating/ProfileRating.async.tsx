import { Suspense, lazy } from 'react';
import { ArticleRatingProps } from './ProfileRating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

const ArticleRatingLazy = lazy(() => import('./ProfileRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
  <Suspense fallback={<Skeleton width="100%" height={120} />}>
    <ArticleRatingLazy {...props} />
  </Suspense>
);
