import * as ActionTypes from './actionTypes'

export const initialState = {
  loading: false,
  notes: []
}

const handlers = {
  [ActionTypes.ADD_NOTE]: (state, { payload }) => ({ ...state, notes: [...state.notes, payload] }),
  [ActionTypes.FETCH_NOTES]: state => ({ ...state, loading: true }),
  [ActionTypes.FETCH_NOTES_SUCCESS]: (state, { payload }) => ({ ...state, notes: payload.notes, loading: false }),
  [ActionTypes.FETCH_NOTES_ERROR]: state => ({ ...state, notes: [], loading: false }),
  [ActionTypes.REMOVE_NOTE]: (state, { payload }) => ({
    ...state,
    notes: state.notes.filter(note => note.id !== payload)
  }),
  DEFAULT: state => state
}

export const notesReducer = (state = initialState, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}
