import React from 'react'
import style from './Portfolio.module.css'
import Photography from './Photography/Photography'

export default function Portfolio() {
  return (
    <div className={style.portfolio}>
      <Photography />
    </div>
  )
}
