/* eslint-disable @typescript-eslint/no-explicit-any */
import { StateSchema } from '@/app/providers/StoreProvider';

export type CustomSelector<T, Args extends any[]> = (state: StateSchema, ...args: Args) => T;

export type Hook<T, Args extends any[]> = (...args: Args) => T;

export type CustomResult<T, Args extends any[]> = [Hook<T, Args>, CustomSelector<T, Args>];
