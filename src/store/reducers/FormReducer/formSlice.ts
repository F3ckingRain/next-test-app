import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import initialState from "@/store/reducers/FormReducer/data";
import {AccountType, ClientType, CompanyType, EmailType, MetaType} from "@/store/reducers/FormReducer/types";

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormClient(state, {payload}: PayloadAction<ClientType>) {
      state.client = {
        ...state.client,
        ...payload
      }
    },
    updateFormCompany(state, {payload}: PayloadAction<CompanyType>) {
      state.company = {
        ...state.company,
        ...payload
      }
    },
    updateFormAccount(state, {payload}: PayloadAction<AccountType[]>) {
      state.account = payload
    },
    updateFormEmail(state, {payload}: PayloadAction<EmailType[]>) {
      state.email = payload;
    },
    updateFormMeta(state, {payload}: PayloadAction<MetaType[]>) {
      state.meta = payload;
    },
    checkFormStatuses(state) {
      Object.values(state.client).forEach(el => el.status = !!el.value);
      Object.values(state.company).forEach(el => el.status = !!el.value);
      state.account.forEach(el => {
        Object.values(el).forEach((elem, index) => {
          if (index < 4) (elem as AccountType['number' | 'name']).status = !!(elem as AccountType['name' | 'number']).value
        });
      });
      state.email.forEach(el => {
        el.status = !!el.value
      });
    },
    updateDefaultAccount(state, {payload}: PayloadAction<{id: number}>) {
      state.account[payload.id].defaultAccount.checked = !state.account[payload.id].defaultAccount.checked;
    },
    concatAccount(state) {
      state.account.push({
        ...initialState.account[0],
        defaultAccount: {
          ...initialState.account[0].defaultAccount,
          checked: false,
        },
        required: false,
      });
    },
    removeAccount(state, {payload}: PayloadAction<{id: number}>) {
      state.account = state.account.filter((el,index) => index !== payload.id)
    },
    addMail(state) {
      state.email.push({
        ...initialState.email[0],
        required: false,
      })
    },
    removeMail(state, {payload}: PayloadAction<{id: number}>) {
      state.email = state.email.filter((el,index) => index !== payload.id)
    },
    addMeta(state) {
      state.meta.push({
        key: {
          status: true,
          value: null
        },
        value: {
          status: true,
          result: null
        }
      })
    },
    removeMeta(state, {payload}: PayloadAction<{id: number}>) {
      state.meta = state.meta.filter((el,index) => index !== payload.id);
    }
  }
})

export default formSlice.reducer;