import React, {useEffect, useState} from 'react';
import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import {EmailType} from "@/store/reducers/FormReducer/types";
import {formSlice} from "@/store/reducers/FormReducer/formSlice";
import styles from './styles.module.css';
import FormInput from "@/components/FormInput/FormInput";

const MailBlock = () => {
  const dispatch = useAppDispatch();
  const {email} = useAppSelector(state => state.FormReducer);
  const [localItem, setLocalItem] = useState<EmailType[]>(email);
  const {updateFormEmail, addMail, removeMail} = formSlice.actions;

  const addMainHandler = () => {
    dispatch(addMail())
  }
  const removeMainHandler = (id: number) => {
    dispatch(removeMail({id}))
  }

  const changeHandler = (value: string, arrId: number) => {
    setLocalItem(prevState => ([...prevState.map((el,index) => {
      if (index !== arrId) return el;
      return {
        ...el,
        value
      }
    })]))
  }

  const blurHandler = (arrId: number) => {
    setLocalItem(prevState => ([...prevState.map((el,index) => {
      if (index !== arrId) return el;
      return {
        ...el,
        status: !!el.value
      }
    })]))
  };

  useEffect(() => {
    dispatch(updateFormEmail(localItem))
  },[localItem, dispatch, updateFormEmail])

  useEffect(() => {
    setLocalItem(email)
  },[email.length])

  return (
    <div className={styles.contentBlock} style={{gap: 32}}>
      {email.map((el,i ) => (
        <div
          className={el.required ? styles.contentBlock : `${styles.contentBlock} ${styles.contentBlock__notRequired}`}
          key={`${el}_${i}`}
        >
          {!el.required && <button
            className={styles.btnRemove}
            type={'button'}
            onClick={() => removeMainHandler(i)}
          >
            - Удалить email
          </button>}
          <FormInput
            value={el.value}
            onChange={(value) => changeHandler(value, i)}
            onBlur={() => blurHandler(i)}
            title={el.title}
            status={el.status}
            errorMessage={el.errorMessage}
            placeholder={el.placeholder}
            required={el.required}
          />
        </div>
      ))}
      <button type={'button'} onClick={addMainHandler} className={styles.btnAdd}>
        + Добавить ещё email
      </button>
    </div>
  );
};

export default MailBlock;