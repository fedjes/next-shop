'use client'
import s from './page.module.scss'
import { useState } from 'react'
export default function About() {
  const [countValue, setCountValue] = useState(0)
  return (
    <section className={s.root}>
      <h1>About us</h1>
      {countValue}
      <div className={s.btnBlock}>
        <button onClick={() => setCountValue(countValue + 1)}>plus</button>
        <button onClick={() => setCountValue(countValue - 1)}>minus</button>
      </div>
    </section>
  )
}
