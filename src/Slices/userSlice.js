import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
};
const customerSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
});

const {setUser} = customerSlice.actions;
export default customerSlice.reducer;