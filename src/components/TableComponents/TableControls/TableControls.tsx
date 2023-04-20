import React from 'react';
import useAppDispatch from "@/hooks/useAppDispatch";
import CustomInput from "@/shared/CustomInput/CustomInput";
import CustomButton from "@/shared/CustomButton/CustomButton";
import styles from './TableControls.module.css';
import useAppSelector from "@/hooks/useAppSelector";
import {bufferSlice} from "@/store/reducers/BufferReducer/bufferSlice";
import {modalSlice} from "@/store/reducers/ModalReducer/modalSlice";
const TableControls = () => {
  const dispatch = useAppDispatch();
  const {id} = useAppSelector(state => state.BufferReducer);
  const {setSearch} = bufferSlice.actions;
  const {setModal} = modalSlice.actions

  const buttonHandler = () => {
    dispatch(setModal('create'))
  }
  const searchHandler = (value: string | null) => {
    dispatch(setSearch(value))
  }

  return (
    <div className={styles.controls}>
      <CustomInput
        defaultValue={null}
        copied={id}
        search
        callback={searchHandler}
        placeholder={'Поиск'}
      />
      <CustomButton onClick={buttonHandler} >
        + Добавить клиента
      </CustomButton>
    </div>
  );
};

export default TableControls;