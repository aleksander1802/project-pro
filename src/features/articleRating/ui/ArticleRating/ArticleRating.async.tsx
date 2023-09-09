import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

const redesignedSkeleton = (
  <ToggleFeatures
    feature="isAppRedesigned"
    on={(
      <SkeletonRedesigned
        width="100%"
        height={140}
      />
    )}
    off={(
      <SkeletonDeprecated
        width="100%"
        height={140}
      />
    )}
  />
);

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
  <Suspense fallback={redesignedSkeleton}>
    <ArticleRatingLazy {...props} />
  </Suspense>
);
