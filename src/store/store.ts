import {combineReducers, configureStore} from "@reduxjs/toolkit";
import TableReducer from './reducers/TableReducer/tableSlice';
import BufferReducer from './reducers/BufferReducer/bufferSlice';
import ModalReducer from './reducers/ModalReducer/modalSlice';
import FormReducer from './reducers/FormReducer/formSlice';

const rootReducer = combineReducers({
  TableReducer,
  BufferReducer,
  ModalReducer,
  FormReducer
})
export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: false,
    }),
    devTools: true,
  })

const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export default store;