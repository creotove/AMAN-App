import React from 'react';
import MainStackNavigation from './src/navigation/MainStackNavigation';
import {configureStore} from '@reduxjs/toolkit';
import customer from './src/Slices/customerSlice';
import user from './src/Slices/userSlice';
import {Provider} from 'react-redux';
import {setupListeners} from '@reduxjs/toolkit/query';
import { adminApi } from './src/api/adminSlice';

const store = configureStore({
  reducer: {
    customer: customer,
    user: user,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
});
setupListeners(store.dispatch);
const App = () => {
  return (
    <Provider store={store}>
      <MainStackNavigation />
    </Provider>
  );
};

export default App;
