import { HIDE_ALERT, SHOW_ALERT } from './actionTypes'

export const initialState = {
  visible: false,
  text: '',
  type: ''
}

const handlers = {
  [SHOW_ALERT]: (state, { payload: { text, type } }) => ({ ...state, text, type, visible: true }),
  [HIDE_ALERT]: state => ({ ...state, visible: false }),
  DEFAULT: state => state
}

export const alertReducer = (state = initialState, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}
