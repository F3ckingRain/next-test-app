import React, {FC} from 'react';
import {tableItem} from "@/store/reducers/TableReducer/data";
import styles from './TableItem.module.css';
interface TableItemProps extends tableItem {
  active?: boolean;
  callback?: (id: string) => void;
}
const TableItem:FC<TableItemProps> =
  ({
     active,
     name,
     id,
     mail,
     created,
     paymentDelay,
     modified,
    callback
  }) => {
  const copyHandler = () => {
    if (callback) return callback(id)
  }

  return (
    <tr style={active ? {backgroundColor: '#f4f4f4'} : {}}>
      <th id={'item-name'}>{name}</th>
      <th id={'item-id'} className={styles.idBlock}>
        <div>{id}</div>
        <button onClick={copyHandler} className={styles.copyBtn}/>
      </th>
      <th id={'item-email'}>{mail}</th>
      <th id={'item-delay'}>{`${paymentDelay} дней`}</th>
      <th id={'item-created'}>{created}</th>
      <th id={'item-modified'}>{modified}</th>
    </tr>
  );
};

export default TableItem;