import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const Notes = ({ notes, onRemove }) => (
  <TransitionGroup component="ul" className="list-group">
    {notes.map(({ id, title, date }) => (
      <CSSTransition key={id} classNames={'note'} timeout={800}>
        <li className="list-group-item note">
          <div>
            <strong>{title}</strong>
            <small>{date}</small>
          </div>
          <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => onRemove(id)}>&times;</button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
)

export default Notes
