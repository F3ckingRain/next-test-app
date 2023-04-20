import React, {useEffect, useState} from 'react';
import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import {formSlice} from "@/store/reducers/FormReducer/formSlice";
import FormInput from "@/components/FormInput/FormInput";
import {ClientType} from "@/store/reducers/FormReducer/types";
import {validateNumber, validateString} from "@/utils/validation";

import styles from './styles.module.css';

const ClientBlock = () => {
  const dispatch = useAppDispatch();
  const {client} = useAppSelector(state => state.FormReducer);
  const [localItem, setLocalItem] = useState<ClientType>(client);
  const {updateFormClient} = formSlice.actions;

  const changeNameHandler = (value: string) => {
    setLocalItem(prevState => ({...prevState, name: {
      ...prevState.name,
        value: validateString(value)
      }})
    )
  }
  const changeEmailHandler = (value: string) => {
    setLocalItem(prevState => ({...prevState, email: {
        ...prevState.email,
        value: validateString(value)
      }})
    )
  }
  const changeDelayHandler = (value: string) => {
    setLocalItem(prevState => ({...prevState, delay: {
        ...prevState.delay,
        value: validateNumber(value)
      }})
    )
  }
  const changeLimitHandler = (value: string) => {
    setLocalItem(prevState => ({...prevState, limit: {
        ...prevState.limit,
        value: validateNumber(value)
      }})
    )
  }
  const blurNameHandler = () => {
    setLocalItem(prevState => ({...prevState, name: {
      ...prevState.name,
        status: !!localItem.name.value
      }})
    )
  }
  const blurEmailHandler = () => {
    setLocalItem(prevState => ({...prevState, email: {
        ...prevState.email,
        status: !!localItem.email.value
      }})
    )
  }
  const blurDelayHandler = () => {
    setLocalItem(prevState => ({...prevState, delay: {
        ...prevState.delay,
        status: !!localItem.delay.value
      }})
    )
  }
  const blurLimitHandler = () => {
    setLocalItem(prevState => ({...prevState, limit: {
        ...prevState.limit,
        status: !!localItem.limit.value
      }})
    )
  }

  const changeHandler = (i: number, value: string) => {
    if (i === 0) return changeNameHandler(value);
    if (i === 1) return changeEmailHandler(value);
    if (i === 2) return changeDelayHandler(value);
    return changeLimitHandler(value)
  }
  const blurHandler = (i: number) => {
    if (i === 0) return blurNameHandler();
    if (i === 1) return blurEmailHandler();
    if (i === 2) return blurDelayHandler();
    return blurLimitHandler();
  }

  useEffect(() => {
    dispatch(updateFormClient(localItem))
  },[dispatch, updateFormClient, localItem])

  return (
    <div className={styles.contentBlock}>
      {Object.values(client).map((el,index) => (
        <FormInput
          value={el.value}
          onChange={(value) => changeHandler(index, value)}
          onBlur={() => blurHandler(index)}
          title={el.title}
          status={el.status}
          errorMessage={el.errorMessage}
          placeholder={el.placeholder}
          required={el.required}
          key={`${el}_${index}`}
        />
      ))}
    </div>
  );
};

export default ClientBlock;