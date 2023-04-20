import {AccountType, EmailType, FormType, MetaType} from "@/store/reducers/FormReducer/types";

const getArrayToMap = (item: FormType[keyof FormType], type: keyof FormType) => {
  if (type === 'client' || type === 'company') return Object.values(item);
  return (item as AccountType[] | EmailType[] | MetaType[]).map(el => Object.values(el))
}

export default getArrayToMap;