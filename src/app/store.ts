import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import sneakersSlice from '../features/Sneaker/sneakersSlice';

export const store = configureStore({
  reducer: {
    sneakersSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
