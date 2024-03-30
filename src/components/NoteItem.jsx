import React from 'react'
import NoteAction from './NoteAction'
import NoteContent from './NoteContent'

export default function NoteItem(props) {
  return (
    <>
      <div className="note-item">
        <NoteContent note={props.note} />
        <NoteAction buttonLabel={props.buttonLabel} id={props.note.id} note={props.note}  onDelete={props.onDelete} onChangeStatus={props.onChangeStatus} />
      </div>
    </>
  )
}
