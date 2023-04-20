import {FormType} from "@/store/reducers/FormReducer/types";

const initialState: FormType = {
  client: {
    name: {
      title: 'Имя',
      status: true,
      placeholder: 'Введите Имя',
      errorMessage: 'Введите имя',
      value: null,
      required: true,
    },
    email: {
      title: 'Email',
      status: true,
      placeholder: 'Введите email',
      errorMessage: 'Введите Email',
      value: null,
      required: true,
    },
    delay: {
      title: 'Дней отсрочки',
      status: true,
      placeholder: 'Введите количество дней',
      errorMessage: 'Дней отсрочки должно быть больше или равно 0',
      value: null,
      required: true
    },
    limit: {
      title: 'Кредитный лимит',
      status: true,
      placeholder: 'Введите лимит',
      errorMessage: 'Кредитный лимит должен быть больше или равен 0',
      value: null,
      required: true,
    }
  },
  company: {
    name: {
      title: 'Название организации',
      status: true,
      placeholder: 'Введите название',
      errorMessage: 'Введите Название организации',
      value: null,
      required: true
    },
    inn: {
      title: 'ИНН организации',
      status: true,
      placeholder: 'Введите ИНН',
      errorMessage: 'Введите ИНН организации',
      value: null,
      required: true
    },
    kpp: {
      title: 'КПП организации',
      status: true,
      placeholder: 'Введите КПП',
      errorMessage: 'Введите КПП организации',
      value: null,
      required: true
    },
    ogrn: {
      title: 'ОГРН организации',
      status: true,
      placeholder: 'Введите ОГРН',
      errorMessage: 'Введите ОГРН организации',
      value: null,
      required: true
    },
    address: {
      title: 'Юридический адрес',
      status: true,
      placeholder: 'Введите адрес',
      errorMessage: 'Введите Юридический адрес',
      value: null,
      required: true
    },
  },
  account: [{
    name: {
      title: 'Название счёта',
      status: true,
      placeholder: 'Введите название счёта',
      errorMessage: 'Введите Название счёта',
      value: null,
      required: true
    },
    number: {
      title: 'Номер счёта',
      status: true,
      placeholder: 'Введите номер счёта',
      errorMessage: 'Введите Номер счёта',
      value: null,
      required: true
    },
    bic: {
      title: 'БИК счёта',
      status: true,
      placeholder: 'Введите БИК счёта',
      errorMessage: 'Введите БИК счёта',
      value: null,
      required: true
    },
    korrNumber: {
      title: 'Корр. номер счёта',
      status: true,
      placeholder: 'Введите корр. номер счёта',
      errorMessage: 'Введите Корр. номер счёта',
      value: null,
      required: true
    },
    required: true,
    defaultAccount: {
      title: 'Дефолтный счёт',
      checked: true,
    }
  }],
  email: [
    {
      title: 'Email',
      status: true,
      placeholder: 'Введите email',
      errorMessage: 'Введите email',
      value: null,
      required: true
    }
  ],
  meta: [

  ]
}

export default initialState;