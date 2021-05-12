import React from 'react'
import { TextProps } from './data.d'
import './style.css'

export default function Hello(props: TextProps) {
  return <div className="text">Hello: {props.name}</div>
}
