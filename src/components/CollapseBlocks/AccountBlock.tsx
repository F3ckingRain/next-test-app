import React, {useEffect, useState} from 'react';
import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import {formSlice} from "@/store/reducers/FormReducer/formSlice";
import FormInput from "@/components/FormInput/FormInput";
import {AccountType} from "@/store/reducers/FormReducer/types";
import styles from './styles.module.css';
import CheckboxInput from "@/shared/CheckboxInput/CheckboxInput";
import {validateNumber} from "@/utils/validation";

const AccountBlock = () => {
  const dispatch = useAppDispatch();
  const {account} = useAppSelector(state => state.FormReducer);
  const [localItem, setLocalItem] = useState<AccountType[]>(account);
  const {
    updateFormAccount,
    updateDefaultAccount,
    concatAccount,
    removeAccount
  } = formSlice.actions;

  const checkboxHandler = (id: number) => {
    dispatch(updateDefaultAccount({id}))
  }

  const changeAccountName = (value: string, id: number) => {
    setLocalItem(prevState => ([...prevState.map((el,index) => {
      if (index !== id) return el
      return {
        ...el,
        name: {
          ...el.name,
          value
        }
      }
    })]))
  }
  const changeAccountNumber = (value: string, id: number) => {
    setLocalItem(prevState => ([...prevState.map((el,index) => {
      if (index !== id) return el
      return {
        ...el,
        number: {
          ...el.number,
          value: validateNumber(value)
        }
      }
    })]))
  }
  const changeAccountBic = (value: string, id: number) => {
    setLocalItem(prevState => ([...prevState.map((el,index) => {
      if (index !== id) return el
      return {
        ...el,
        bic: {
          ...el.bic,
          value: validateNumber(value)
        }
      }
    })]))
  }
  const changeAccountKorr = (value: string, id: number) => {
    setLocalItem(prevState => ([...prevState.map((el,index) => {
      if (index !== id) return el
      return {
        ...el,
        korrNumber: {
          ...el.korrNumber,
          value: validateNumber(value)
        }
      }
    })]))
  }
  const blurAccountName = (id: number) => {
    setLocalItem(prevState => ([...prevState.map((el,index) => {
      if (index !== id) return el
      return {
        ...el,
        name: {
          ...el.name,
          status: !!el.name.value
        }
      }
    })]))
  }
  const blurAccountNumber = (id: number) => {
    setLocalItem(prevState => ([...prevState.map((el,index) => {
      if (index !== id) return el
      return {
        ...el,
        number: {
          ...el.number,
          status: !!el.number.value
        }
      }
    })]))
  }
  const blurAccountBic = (id: number) => {
    setLocalItem(prevState => ([...prevState.map((el,index) => {
      if (index !== id) return el
      return {
        ...el,
        bic: {
          ...el.bic,
          status: !!el.bic.value
        }
      }
    })]))
  }
  const blurAccountKorr = (id: number) => {
    setLocalItem(prevState => ([...prevState.map((el,index) => {
      if (index !== id) return el
      return {
        ...el,
        korrNumber: {
          ...el.korrNumber,
          status: !!el.korrNumber.value
        }
      }
    })]))
  }
  const changeHandler = (value: string, arrId: number, id: number) => {
    if (id === 0) return changeAccountName(value, arrId);
    if (id === 1) return changeAccountNumber(value, arrId);
    if (id === 2) return changeAccountBic(value, arrId);
    return changeAccountKorr(value, arrId);
  }

  const blurHandler = (arrId: number, id: number) => {
    if (id === 0) return blurAccountName(arrId);
    if (id === 1) return blurAccountNumber(arrId);
    if (id === 2) return blurAccountBic(arrId);
    return blurAccountKorr(arrId);
  }
  const getNewAccount = () => {
    dispatch(concatAccount())
  };
  const removeAccountHandler = (id: number) => {
    dispatch(removeAccount({id}))
  };

  useEffect(() => {
    setLocalItem(account)
  },[account.length])

  useEffect(() => {
    dispatch(updateFormAccount(localItem))
  },[dispatch, updateFormAccount, localItem])

  return (
    <div className={styles.contentBlock}>
      {account.map((el,i) => (
        <div className={el.required ? styles.contentBlock : `${styles.contentBlock} ${styles.contentBlock__notRequired}` } key={`${el}_${i}`}>
          {!el.required && <button
            type={'button'}
            className={styles.btnRemove}
            onClick={() => removeAccountHandler(i)}
          >
            - Удалить счёт
          </button>
          }
          {Object.values(el).map((elem,index) => {
            const elemItem: AccountType['name' | 'number'] = elem as AccountType['name' | 'number']
            if (index < 4) return (
              <FormInput
                value={elemItem.value}
                onChange={(value) => changeHandler(value, i, index)}
                onBlur={() => blurHandler(i, index)}
                title={elemItem.title}
                status={elemItem.status}
                errorMessage={elemItem.errorMessage}
                placeholder={elemItem.placeholder}
                required={el.required}
                key={`${elem}_${index}`}
              />
            )
          })}
          <CheckboxInput
            label={el.defaultAccount.title}
            checked={el.defaultAccount.checked}
            setChecked={() => checkboxHandler(i)}
          />
        </div>
      ))}
      <button type={'button'} onClick={getNewAccount} className={styles.btnAdd}>
       + Добавить ещё счёт
      </button>
    </div>
  );
};

export default AccountBlock;