export type modalType = 'create' | 'auth' | null

type modalStateType = {
  modal: modalType
}

const initialState:modalStateType = {
  modal: null,
}

export default initialState