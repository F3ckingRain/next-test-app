import React, {useState} from 'react';
import styles from './TableContainer.module.css';
import TableHeader from "@/components/TableComponents/TableHeader/TableHeader";
import useAppSelector from "@/hooks/useAppSelector";
import TableItem from "@/components/TableComponents/TableItem/TableItem";
import useAppDispatch from "@/hooks/useAppDispatch";
import {bufferSlice} from "@/store/reducers/BufferReducer/bufferSlice";
const TableContainer = () => {
  const dispatch = useAppDispatch();
  const {copyId} = bufferSlice.actions;
  const {search} = useAppSelector(state => state.BufferReducer);
  const tableItems = useAppSelector(state => state.TableReducer);

  const [sorted, setSorted] = useState<boolean>(false);
  const sortToggle = () => {
    setSorted(prevState => !prevState)
  }

  const copyHandler = (id: string) => {
    dispatch(copyId(id))
  };

  const sortedItems = sorted
    ? [...tableItems].sort((a,b) => a.paymentDelay - b.paymentDelay)
    : tableItems
  const filteredItems = search
    ? sortedItems.filter(el => el.id.includes(search))
    : sortedItems

  return (
    <div className={styles.tableContainer}>
      <TableHeader title={'Клиенты'} />
      <table className={styles.table}>
        <thead className={`${styles.tableHead} ${styles.active}`}>
          <tr>
            <th id={'item-name'}>Имя</th>
            <th id={'item-id'}>ID</th>
            <th id={'item-email'}>Email</th>
            <th id={'item-delay'}>
              <button className={styles.sortBtn} onClick={sortToggle}/>
              <p>Отсрочка оплаты</p>
            </th>
            <th id={'item-created'}>Создан</th>
            <th id={'item-modified'}>Изменён</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
        {filteredItems.map((el,index) => (
          <TableItem
            active={index === 0}
            name={el.name}
            id={el.id}
            mail={el.mail}
            paymentDelay={el.paymentDelay}
            created={el.created}
            modified={el.modified}
            callback={copyHandler}
            key={`${el}_${index}`}
          />
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableContainer;