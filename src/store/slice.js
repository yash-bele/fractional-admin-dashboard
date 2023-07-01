import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  verificationData: [],
};

export const getVerificationData = createAsyncThunk(
  "getVerificationData",
  async (_, thunkAPI) => {
    return await axios.get(url).then((res) => res.data);
  }
);

const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    [getVerificationData.pending]: (state) => {
      state.isLoading = true;
    },
    [getVerificationData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.VerificationData = payload;
    },
    [getVerificationData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default slice.reducer;
// export const { clearCart, removeItem, increment, decrement } =
//   cartSlice.actions;
