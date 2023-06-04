import { StateSchema } from 'app/providers/storeProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
  test('should return string admin', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('admin');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
