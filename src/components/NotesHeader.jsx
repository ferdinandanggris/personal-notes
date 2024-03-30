import React from 'react'
import NoteSearch from './NoteSearch'

export default function NotesHeader(props) {
  return (
    <>
      <div className="note-app__header">
        <h1>Notes</h1>
        <NoteSearch searchNote={props.searchNote} />
      </div>
    </>
  )
}
