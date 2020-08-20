import React, { useEffect } from 'react'

import Form from '../../components/Form'
import Notes from '../../components/Notes'
import { useNotes } from '../../../context/notes/NotesState'
import Loader from '../../components/Loader'

const Home = () => {
  const { loading, notes, getNotes, removeNote } = useNotes()

  useEffect(() => { getNotes() }, [])

  return (
    <>
      <Form />
      <hr/>
      { loading && <Loader /> }
      <Notes notes={notes} onRemove={removeNote} />
    </>
  )
}

export default Home
