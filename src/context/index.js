import React from 'react'

import { AlertState } from './alert/AlertState'
import { NotesState } from './notes/NotesState'

const ContextWrapper = ({ children }) => (
  <AlertState>
    <NotesState>
      { children }
    </NotesState>
  </AlertState>
)

export default ContextWrapper
