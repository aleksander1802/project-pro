import { StateSchema } from '@/app/providers/StoreProvider';

export type CustomSelector<T> = (state: StateSchema) => T;

export type CustomResult<T> = [() => T, CustomSelector<T>];
