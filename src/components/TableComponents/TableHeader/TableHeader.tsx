import React, {FC} from 'react';
import styles from './TableHeader.module.css';
import TableControls from "@/components/TableComponents/TableControls/TableControls";

interface TableHeaderProps {
  title: string;
}
const TableHeader:FC<TableHeaderProps> = ({title}) => {
  return (
    <div className={styles.tableHeader}>
      <div className={styles.tableHeader__title}>{title}</div>
      <TableControls/>
    </div>
  );
};

export default TableHeader;