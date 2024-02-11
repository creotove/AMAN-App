import {configureStore} from '@reduxjs/toolkit';

import {adminApi} from '../api/adminSlice.js';

export default configureStore({
  reducer: {
    admin: adminApi.reducer,
  },
});

