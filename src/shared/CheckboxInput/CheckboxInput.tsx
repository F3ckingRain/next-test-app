import React, {FC} from 'react';
import styles from './CheckboxInput.module.css';

interface CheckboxInputProps {
  label: string;
  checked: boolean;
  setChecked: () => void;
}
const CheckboxInput:FC<CheckboxInputProps> = ({checked, label, setChecked}) => {
  const checkToggle = () => {
    setChecked()
  }

  return (
    <div className={styles.checkboxContainer}>
      <div>{label}</div>
      <div className={styles.checkbox}>
        <div className={checked ? `${styles.track} ${styles.track__checked}` : styles.track} onClick={checkToggle} aria-hidden>
          <div className={checked ? `${styles.thumb} ${styles.thumb__checked}` : styles.thumb}/>
        </div>
      </div>
    </div>
  );
};

export default CheckboxInput;