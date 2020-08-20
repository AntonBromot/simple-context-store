import React, { useReducer, createContext, useContext } from 'react'

import { notesReducer, initialState } from './notesReducer'
import * as ActionTypes from './actionTypes'
import * as API from '../../utils/api'
import {useAlert} from "../alert/AlertState";

const NotesContext = createContext()

export const useNotes = () => useContext(NotesContext)

export const NotesState = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, initialState)
  const { show } = useAlert()
  const { notes, loading } = state

  const getNotes = async () => {
    dispatch({ type: ActionTypes.FETCH_NOTES })

    try {
      const data = await API.getNotes()
      const notes = data || []

      dispatch({ type: ActionTypes.FETCH_NOTES_SUCCESS, payload: { notes } })
    } catch (e) {
      dispatch({ type: ActionTypes.FETCH_NOTES_ERROR })
      console.log(e.message)
      show('Something went wrong', 'danger')
    }
  }

  const createNote = async title => {
    const note = { title, date: new Date().toJSON() }

    try {
      const data = await API.createNote(note)
      show('Note was created', 'success')
      dispatch({type: ActionTypes.ADD_NOTE, payload: data})
    } catch (e) {
      console.log(e.message)
      show('Something went wrong', 'danger')
    }
  }

  const removeNote = async id => {
    try {
      await API.removeNote(id)
      dispatch({ type: ActionTypes.REMOVE_NOTE, payload: id })
    } catch (e) {
      console.log(e.message)
      show('Something went wrong', 'danger')
    }
  }

  return (
    <NotesContext.Provider value={{ createNote, removeNote, getNotes, loading, notes }}>
      {children}
    </NotesContext.Provider>
  )
}
