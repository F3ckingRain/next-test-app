
export type tableItem = {
  name: string;
  id: string;
  mail: string;
  paymentDelay: number;
  created: string;
  modified: string;
}

const initialState: tableItem[] = [
  {name: 'saf', id: 'gqes-3#fa', mail: 'mail.mail@mail.ru', paymentDelay: 20, created: '20.03.2022' , modified: '12.01.2023'},
  {name: 'aag', id: 'hsd2_331', mail: 'rwqrqw.mail@mail.ru', paymentDelay: 125, created: '22.03.2022' , modified: '22.01.2023'},
  {name: 'lllsa', id: 'iii#7712s', mail: 'fqlw.mail@mail.ru', paymentDelay: 12, created: '09.03.2021' , modified: '04.03.2023'},
]

export default initialState;