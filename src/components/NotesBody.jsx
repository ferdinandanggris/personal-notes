import React from 'react'
import NoteInput from './NoteInput'
import NoteList from './NoteList'

export default function NotesBody(props) {
  
  return (
    <div className="note-app__body">
      <NoteInput addNote={props.addNote} />
      <NoteList title="Catatan Aktif" buttonLabel={{left : 'Delete', right : 'Arsipkan'}} notes={props.notes} onDelete={props.onDelete} onChangeStatus={props.onChangeStatus} />
      <NoteList title="Catatan Arsip" buttonLabel={{left : 'Delete', right : 'Pindahkan'}} notes={props.archivedNotes}  onDelete={props.onDelete} onChangeStatus={props.onChangeStatus} />
    </div>
  )
}
