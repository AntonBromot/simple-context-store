import * as AsyncStorage from './AsyncStorage'

export const getNotes = () => AsyncStorage.get('notes')
export const createNote = body => AsyncStorage.post('notes', body)
export const removeNote = id => AsyncStorage.remove('notes', id)
