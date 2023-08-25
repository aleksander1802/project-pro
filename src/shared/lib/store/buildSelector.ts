import { useSelector } from 'react-redux';
import type { CustomResult, CustomSelector } from './selector';

export function buildSelector<T>(selector: CustomSelector<T>): CustomResult<T> {
  const useSelectorHook = () => useSelector(selector);

  return [useSelectorHook, selector];
}
