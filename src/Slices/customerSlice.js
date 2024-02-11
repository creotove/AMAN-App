import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
};
const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    stitchBill: (state, action) => {},
  },
});

const {stitchBill} = customerSlice.actions;
export default customerSlice.reducer;