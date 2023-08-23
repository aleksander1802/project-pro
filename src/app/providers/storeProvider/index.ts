import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type {
  StateSchema,
  ThunkConfig,
  StateSchemaKey,
  ReduxStoreWithManager,
} from './config/StateSchema';

export { createReduxStore, StoreProvider };

export type {
  StateSchema,
  AppDispatch,
  ThunkConfig,
  StateSchemaKey,
  ReduxStoreWithManager,
};
