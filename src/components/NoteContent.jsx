import React from 'react'
import { showFormattedDate } from '../utils'

export default function NoteContent(props) {
  return (
    <>
      <div className="note-item__content">
        <h3 className="note-item__title">{props.note.title}</h3>
        <p className="note-item__date">{showFormattedDate(props.note.createdAt)}</p>
        <p className="note-item__body">{props.note.body}</p>
      </div>
    </>
  )
}
