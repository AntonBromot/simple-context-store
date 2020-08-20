import { useState } from 'react'

const useInput = initialValue => {
  const [ value, setValue ] = useState(initialValue)
  const onChange = val => setValue(val?.target?.value || val)

  return { value, onChange }
}

export default useInput
