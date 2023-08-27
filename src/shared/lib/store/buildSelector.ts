/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux';
import type { CustomResult, CustomSelector, Hook } from './selector';
import { StateSchema } from '@/app/providers/StoreProvider';

export function buildSelector<T, Args extends any[]>(
  selector: CustomSelector<T, Args>,
): CustomResult<T, Args> {
  const useSelectorHook: Hook<T, Args> = (...args: Args) =>
    useSelector((state: StateSchema) => selector(state, ...args));

  return [useSelectorHook, selector];
}
