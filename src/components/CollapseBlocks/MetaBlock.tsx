import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import {formSlice} from "@/store/reducers/FormReducer/formSlice";
import {MetaType} from "@/store/reducers/FormReducer/types";
const MetaBlock = () => {
  const dispatch = useAppDispatch();
  const {meta} = useAppSelector(state => state.FormReducer);
  const {addMeta,removeMeta, updateFormMeta} = formSlice.actions;
  const [localItem, setLocalItem] = useState<MetaType[]>(meta)
  const addMetaHandler = () => {
    dispatch(addMeta())
  };
  const removeMetaHandler = (id: number) => {
    dispatch(removeMeta({id}))
  };

  const keyHandler = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    setLocalItem(prevState => [...prevState.map((el,index) => {
      if (index !== id) return el
      return {
        ...el,
        key: {
          ...el.key,
          value: e.target.value
        }
      }
    })])
  };
  const valueHandler = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    setLocalItem(prevState => [...prevState.map((el,index) => {
      if (index !== id) return el
      return {
        ...el,
        value: {
          ...el.value,
          result: e.target.value
        }
      }
    })])
  };

  useEffect(() => {
    setLocalItem(meta)
  },[meta.length])

  useEffect(() => {
    dispatch(updateFormMeta(localItem))
  },[localItem, dispatch, updateFormMeta])

  return (
    <div className={styles.contentBlock}>
      <div className={styles.metaTable}>
        <div className={styles.metaTable__header}>
          <div className={styles.meta__key}>Ключ</div>
          <div className={styles.meta__value}>Значение</div>
          <div className={styles.meta__removeBtn}/>
        </div>
        <div className={meta.length
          ? styles.metaTable__content
          : `${styles.metaTable__content} ${styles.meta__empty}`}
        >
          {meta.map((el,index) => (
            <div className={styles.meta} key={`${el}_${index}`}>
              <div className={styles.meta__key}>
                <input
                  className={styles.metaInput}
                  value={el.key.value || ''}
                  onChange={(e) => keyHandler(e, index)}
                />
              </div>
              <div className={styles.meta__value}>
                <input
                  className={styles.metaInput}
                  value={el.value.result || ''}
                  onChange={(e) => valueHandler(e, index)}
                />
              </div>
              <div className={styles.meta__removeBtn}>
                <button type={'button'} onClick={() => removeMetaHandler(index)} className={styles.metaBtn__remove}/>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className={styles.metaTable__btnAdd} type={'button'} onClick={addMetaHandler}>
        Добавить ещё ключ - значение
      </button>
    </div>
  );
};

export default MetaBlock;