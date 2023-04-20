import React, {FC, useState} from 'react';
import styles from './Collapse.module.css';
import {FormType} from "@/store/reducers/FormReducer/types";
import ClientBlock from "@/components/CollapseBlocks/ClientBlock";
import CompanyBlock from "@/components/CollapseBlocks/CompanyBlock";
import AccountBlock from "@/components/CollapseBlocks/AccountBlock";
import MailBlock from "@/components/CollapseBlocks/MailBlock";
import MetaBlock from "@/components/CollapseBlocks/MetaBlock";

interface CollapseProps {
  title: string;
  type: keyof FormType;
}
const Collapse:FC<CollapseProps> = ({title, type}) => {
  const [open, setOpen] = useState<boolean>(true);

  const openToggle = () => {
    setOpen(prevState => !prevState)
  }

  return (
    <div className={styles.collapse}>
      <button className={styles.title} type={'button'} onClick={openToggle}>
        <div
          className={open ? `${styles.openBtn} ${styles.rotate}` : styles.openBtn}
        />
        <div>{title}</div>
      </button>
      <div className={open ? styles.content : `${styles.content} ${styles.hidden}`}>
        {type === 'client' && <ClientBlock />}
        {type === 'company' && <CompanyBlock/>}
        {type === 'account' && <AccountBlock/>}
        {type === 'email' && <MailBlock/>}
        {type === 'meta' && <MetaBlock/>}
      </div>
    </div>
  );
};

export default Collapse;