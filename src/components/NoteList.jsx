import React from 'react'
import NoteItem from './NoteItem'

export default function NoteList(props) {
  return (
    <>
      <h2>{props.title}</h2>
      { props.notes.length === 0 && <p className='notes-list__empty-message'>Tidak ada catatan</p> ||
          <div className="notes-list">
            {props.notes.map((note) => (
              <NoteItem buttonLabel={props.buttonLabel} key={note.id} note={note} onDelete={props.onDelete} onChangeStatus={props.onChangeStatus} />
              ))}
          </div>
      }
    </>
  )
}
