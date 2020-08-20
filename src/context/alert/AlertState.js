import React, {useReducer, useContext, createContext} from 'react'

import { alertReducer, initialState } from './alertReducer'
import { HIDE_ALERT, SHOW_ALERT } from './actionTypes'

const AlertContext = createContext()

export const useAlert = () => useContext(AlertContext)

export const AlertState = ({children}) => {
  const [state, dispatch] = useReducer(alertReducer, initialState)

  const show = (text, type = 'warning') => {
    dispatch({ type: SHOW_ALERT, payload: {text, type} })
    setTimeout(() => dispatch({ type: HIDE_ALERT }), 2000)
  }
  const hide = () => dispatch({type: HIDE_ALERT})

  return (
    <AlertContext.Provider value={{ show, hide, alert: state }}>
      {children}
    </AlertContext.Provider>
  )
}
