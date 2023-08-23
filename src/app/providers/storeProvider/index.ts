import {
  createReduxStore,
  AppDispatch,
} from '@/app/providers/storeProvider/config/store';
import type {
  StateSchema,
  ThunkConfig,
} from '@/app/providers/storeProvider/config/StateSchema';

export { StoreProvider } from './ui/StoreProvider';

export { createReduxStore };

export type { StateSchema, AppDispatch, ThunkConfig };
