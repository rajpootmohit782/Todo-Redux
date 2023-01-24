import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    tasks: []
  },
  reducers: {
    saveTaskToRedux: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    }
  }
});
export const { saveTaskToRedux } = counterSlice.actions;
export default counterSlice.reducer;
