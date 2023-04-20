import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import initialState, {modalType} from "@/store/reducers/ModalReducer/data";

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal(state, {payload}: PayloadAction<modalType>) {
      state.modal = payload
    }
  }
})

export default modalSlice.reducer;