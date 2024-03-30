import React from 'react'

export default function ButtonComponent(props) {
  return (
    <button className={props.class} onClick={() => props.action(props.id)}>{props.label}</button>
  )
}
