import React from 'react'
import { CSSTransition } from 'react-transition-group'

import { useAlert } from '../../../context/alert/AlertState'

const Alert = () => {
  const { alert, hide } = useAlert()

  return (
    <CSSTransition in={alert.visible} timeout={{ enter: 500, exit: 350 }} classNames={'alert'} mountOnEnter unmountOnExit>
      <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
        <strong>Alert!</strong>&nbsp;{alert.text}
        <button onClick={hide} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </CSSTransition>
  )
}

export default Alert
