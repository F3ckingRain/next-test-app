import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import initialState, {tableItem} from "@/store/reducers/TableReducer/data";

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    addClient(state, {payload}: PayloadAction<tableItem>) {
      state.push(payload)
    },
  }
})

export default tableSlice.reducer