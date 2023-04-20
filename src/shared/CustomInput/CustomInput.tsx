import React, {FC, useEffect, useState} from 'react';
import styles from './CustomInput.module.css';

interface CustomInputProps {
  defaultValue: string | null;
  placeholder?: string;
  callback?: (value: string | null) => void;
  search?: boolean;
  onChange?: (value: string) => void;
  copied?: string | null;
}
const CustomInput:FC<CustomInputProps> = ({defaultValue, placeholder, search, copied, onChange, callback}) => {
  const [inputValue, setInputValue] = useState<string | null>(defaultValue);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) return onChange(e.target.value);
    return setInputValue(e.target.value);
  }
  const clickHandler = () => {
    if (!inputValue) return
   if (callback) return callback(inputValue)
  }

  const pasteHandler = () => {
    if (copied) return setInputValue(copied);
  }

  useEffect(() => {
    setInputValue(defaultValue)
  },[defaultValue]);

  useEffect(() => {
    if (inputValue?.length) return;
    if (!inputValue) {
      if (callback) return callback(null)
    }
  },[callback, inputValue])

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        placeholder={!inputValue ? placeholder : undefined}
        value={inputValue || ''}
        onPaste={pasteHandler}
        onChange={changeHandler}/>
      {search && (
        <button className={styles.search} type={'button'} onClick={clickHandler}/>
      )}
    </div>
  );
};

export default CustomInput;