import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileForm } from './getProfileForm';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileForm.test', () => {
  test('should return error', () => {
    const data = {
      username: 'admin',
      age: 29,
      country: Country.Russia,
      lastname: 'Reiss',
      firstname: 'Darrell',
      city: 'Donetsk',
      currency: Currency.RUB,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
