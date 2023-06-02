import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) =>
  (
    <StoreProvider initialState={state}>
      <StoryComponent />
    </StoreProvider>
  );
