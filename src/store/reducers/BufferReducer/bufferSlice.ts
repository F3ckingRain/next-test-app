import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type bufferState = {
  id: string | null;
  search: string | null;
}
const initialState: bufferState = {
  id: null,
  search: null,
}
export const bufferSlice = createSlice({
  name: 'buffer',
  initialState,
  reducers: {
    copyId(state, {payload}: PayloadAction<string>) {
      state.id = payload
    },
    setSearch(state, {payload}: PayloadAction<string | null>) {
      state.search = payload
    }
  }
})

export default bufferSlice.reducer;