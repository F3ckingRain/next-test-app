import React, {FC} from 'react';
import styles from './FormInput.module.css';
import {FormInputType} from "@/components/FormInput/types";


interface FormInputProps extends FormInputType {
  value: string | number | null;
  onChange: (value: string) => void;
  onBlur: (value: string) => void;
}
const FormInput:FC<FormInputProps> =
  ({
     title,
     errorMessage,
     status,
     placeholder,
     value,
     onBlur,
     onChange,
     required
  }) => {

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onBlur(e.target.value)
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className={styles.formInputContainer}>
      <div className={styles.title}>
        {required && <div className={styles.redColor}>*</div>}
        <div>{title}</div>
      </div>
      <input
        className={status ? styles.input : `${styles.input} ${styles.input__red}`}
        placeholder={placeholder}
        value={value || ''}
        onBlur={blurHandler}
        onChange={changeHandler}
      />
      {!status && (
        <div style={{marginTop: 4}} className={styles.redColor}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default FormInput;