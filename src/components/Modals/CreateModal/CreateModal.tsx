import React, {FormEvent, useEffect, useState} from 'react';
import useAppSelector from "@/hooks/useAppSelector";
import styles from './CreateModal.module.css';
import {modalSlice} from "@/store/reducers/ModalReducer/modalSlice";
import useAppDispatch from "@/hooks/useAppDispatch";
import CustomButton from "@/shared/CustomButton/CustomButton";
import {tableSlice} from "@/store/reducers/TableReducer/tableSlice";
import {tableItem} from "@/store/reducers/TableReducer/data";
import Collapse from "@/components/Collapse/Collapse";
import {formSlice} from "@/store/reducers/FormReducer/formSlice";
import {AccountType} from "@/store/reducers/FormReducer/types";
const CreateModal = () => {
  const dispatch = useAppDispatch();
  const {modal} = useAppSelector(state => state.ModalReducer);
  const {client, account, email, company} = useAppSelector(state => state.FormReducer);
  const {setModal} = modalSlice.actions;
  const {addClient} = tableSlice.actions;
  const {checkFormStatuses} = formSlice.actions

  const [tableClient, setTableClient] = useState<tableItem | null>(null);
  const [checkStatuses, setCheckStatuses] = useState<boolean>(false);

  const closeHandler = () => {
    dispatch(setModal(null))
  };


  const addClientHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(checkFormStatuses());
    if (!checkStatuses || !tableClient) return;
    dispatch(addClient(tableClient))
    return dispatch(setModal(null));
  };

  const date = new Date(Date.now()).toLocaleDateString();

  useEffect(() => {
    setTableClient({
      name: client.name.value || '',
      paymentDelay: client.delay.value || 0,
      modified: date,
      id: client.name.value || '',
      mail: client.email.value || '',
      created: date
    })
  },[client, date])

  useEffect(() => {
    setCheckStatuses(Object.values(client).some(el => !!el.value)
      && account.map(elem => Object.values(elem).some(el => {
        return !!((el as AccountType['name']).value)
      }))
      && Object.values(company).some(el => !!el.value)
      && email.some(el => !!el.value))
  },[client, company, email, account])

  return (
    <div
      className={modal === 'create' ? styles.modalContainer : `${styles.modalContainer} ${styles.disabled}`}
      onClick={closeHandler}
      aria-hidden
    >
      <div
        className={styles.modal}
        onClick={e => e.stopPropagation()}
        aria-hidden
      >
        <div className={styles.modal__header}>
          <div>Создание цены</div>
          <button className={styles.modal__closeBtn} onClick={closeHandler}/>
        </div>
        <form className={styles.modal__content} onSubmit={addClientHandler}>
          <Collapse title={'Детали клиента'} type={'client'}/>
          <Collapse title={'Детали организации'} type={'company'}/>
          <Collapse title={'Банковские счета'} type={'account'}/>
          <Collapse title={'Emails для счетов'} type={'email'}/>
          <Collapse title={'Meta'} type={'meta'}/>
          <CustomButton type={'submit'}  style={{marginTop: 20, width: '30%'}}>
            Создать
          </CustomButton>
        </form>
      </div>
    </div>
  );
}

export default CreateModal;