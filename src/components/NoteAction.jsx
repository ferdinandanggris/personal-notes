import React from 'react'
import ButtonComponent from './ButtonComponent'

export default function NoteAction(props) {
  return (
    <>
      <div className="note-item__action">
        <ButtonComponent class={'note-item__delete-button'} id={props.id} label={props.buttonLabel.left} action ={props.onDelete} />
        <ButtonComponent class={'note-item__archive-button'} id={props.id} label={props.buttonLabel.right} action={props.onChangeStatus} />
      </div>
    </>
  )
}
