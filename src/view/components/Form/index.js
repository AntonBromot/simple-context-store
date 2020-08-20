import React from 'react'

import { useAlert } from '../../../context/alert/AlertState'
import { useNotes } from '../../../context/notes/NotesState'
import useInput from '../../../hooks/useInput'

const Form = () => {
  const { value, onChange } = useInput('')
  const { show } = useAlert()
  const { createNote } = useNotes()

  const submitHandler = async e => {
    e.preventDefault()
    if (!value.trim()) return show('Enter note')

    createNote(value)
    onChange('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Enter note" value={value} onChange={onChange} />
      </div>
    </form>
  )
}

export default Form
