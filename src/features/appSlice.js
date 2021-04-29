import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState : {
    channleId:null,
    channleName:null
  },
  reducers: {
    setChannelId: (state, action) => {
      state.app += action.payload;
    }
  }
});

export const { setChannelId } = appSlice.actions;
export const selectChannelId = (state) => state.app.channleId;
export const selectChannelName = (state) => state.app.channleName;
export default appSlice.reducer;