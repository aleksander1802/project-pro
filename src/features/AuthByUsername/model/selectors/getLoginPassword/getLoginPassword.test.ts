import { StateSchema } from 'app/providers/storeProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
  test('should return string admin', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: 'admin',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('admin');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
