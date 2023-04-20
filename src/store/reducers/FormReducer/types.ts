import {FormInputType} from "@/components/FormInput/types";

export type ClientType = {
  name: FormInputType & {
    value: string | null;
  }
  email: FormInputType & {
    value: string | null
  };
  delay: FormInputType & {
    value: number | null;
  }
  limit: FormInputType & {
    value: number | null;
  }
}
export type CompanyType = {
  name: FormInputType & {
    value: string | null;
  }
  inn: FormInputType & {
    value: number | null;
  }
  kpp: FormInputType & {
    value: number | null;
  }
  ogrn: FormInputType & {
    value: number | null;
  }
  address: FormInputType & {
    value: string | null;
  },
}
export type AccountType = {
  name: FormInputType & {
    value: string | null;
  }
  number: FormInputType & {
    value: number | null;
  }
  bic: FormInputType & {
    value: number | null;
  }
  korrNumber: FormInputType & {
    value: number | null;
  },
  defaultAccount: {
    title: string;
    checked: boolean;
  },
  required: boolean,
}
export type EmailType = FormInputType & {
  value: string | null;
}
export type MetaType = {
  key: {
    status: boolean;
    value:  string | number | null;
  }
  value: {
    status: boolean;
    result: string | number | null;
  }
}

export type FormType = {
  client: ClientType;
  company: CompanyType;
  account: AccountType[];
  email: EmailType[];
  meta: MetaType[];
}