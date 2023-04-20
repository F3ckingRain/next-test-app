import React, {useEffect, useState} from 'react';
import useAppDispatch from "@/hooks/useAppDispatch";
import {CompanyType} from "@/store/reducers/FormReducer/types";
import useAppSelector from "@/hooks/useAppSelector";
import FormInput from "@/components/FormInput/FormInput";
import styles from './styles.module.css';
import {validateNumber, validateString} from "@/utils/validation";
import {formSlice} from "@/store/reducers/FormReducer/formSlice";

const CompanyBlock = () => {
  const dispatch = useAppDispatch();
  const {company} = useAppSelector(state => state.FormReducer);
  const [localItem, setLocalItem] = useState<CompanyType>(company);
  const {updateFormCompany} = formSlice.actions

  const changeNameHandler = (value: string) => {
    setLocalItem(prevState => ({
      ...prevState,
      name: {
        ...prevState.name,
        value: validateString(value)
      }
    }))
  }
  const changeInnHandler = (value: string) => {
    setLocalItem(prevState => ({
      ...prevState,
      inn: {
        ...prevState.inn,
        value: validateNumber(value)
      }
    }))
  }
  const changeKppHandler = (value: string) => {
    setLocalItem(prevState => ({
      ...prevState,
      kpp: {
        ...prevState.kpp,
        value: validateNumber(value)
      }
    }))
  }
  const changeOgrnHandler = (value: string) => {
    setLocalItem(prevState => ({
      ...prevState,
      ogrn: {
        ...prevState.ogrn,
        value: validateNumber(value)
      }
    }))
  }
  const changeAddressHandler = (value: string) => {
    setLocalItem(prevState => ({
      ...prevState,
      address: {
        ...prevState.address,
        value: value
      }
    }))
  }

  const blurNameHandler = () => {
    setLocalItem(prevState => ({
      ...prevState,
      name: {
        ...prevState.name,
        status: !!prevState.name.value
      }
    }))
  }
  const blurInnHandler = () => {
    setLocalItem(prevState => ({
      ...prevState,
      inn: {
        ...prevState.inn,
        status: !!prevState.inn.value
      }
    }))
  }
  const blurKppHandler = () => {
    setLocalItem(prevState => ({
      ...prevState,
      kpp: {
        ...prevState.kpp,
        status: !!prevState.kpp.value
      }
    }))
  }
  const blurOgrnHandler = () => {
    setLocalItem(prevState => ({
      ...prevState,
      ogrn: {
        ...prevState.ogrn,
        status: !!prevState.ogrn.value
      }
    }))
  }
  const blurAddressHandler = () => {
    setLocalItem(prevState => ({
      ...prevState,
      address: {
        ...prevState.address,
        status: !!prevState.address.value
      }
    }))
  }

  const changeHandler = (id: number, value: string) => {
    if (id === 0) return changeNameHandler(value);
    if (id === 1) return changeInnHandler(value);
    if (id === 2) return changeKppHandler(value);
    if (id === 3) return changeOgrnHandler(value);
    return changeAddressHandler(value);
  }
  const blurHandler = (id: number) => {
    if (id === 0) return blurNameHandler();
    if (id === 1) return blurInnHandler();
    if (id === 2) return blurKppHandler();
    if (id === 3) return blurOgrnHandler();
    return blurAddressHandler();
  }

  useEffect(() => {
    dispatch(updateFormCompany(localItem))
  },[localItem, dispatch, updateFormCompany])

  return (
    <div className={styles.contentBlock}>
      {Object.values(company).map((el,index) => (
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

export default CompanyBlock;